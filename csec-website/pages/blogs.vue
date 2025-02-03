<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Blog Posts</h1>
    
    <div class="space-y-6">
      <div 
        v-for="post in posts" 
        :key="post.slug"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
      >
        <div class="cursor-pointer" @click="togglePost(post.slug)">
          <h2 class="text-2xl font-bold dark:text-white">{{ post.title }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mt-2">
            {{ formatDate(post.date) }}
          </p>
        </div>
        
        <div 
          v-if="expandedPost === post.slug"
          class="mt-4 prose dark:prose-invert max-w-none"
          v-html="post.content"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'

export default {
  data() {
    return {
      posts: [],
      expandedPost: null
    }
  },
  async mounted() {
    // Get all blog files using static import
    const files = import.meta.glob('~/blogs/*.md', { eager: true, as: 'raw' })
    
    this.posts = Object.entries(files).map(([path, content]) => {
      // Extract filename from path
      const filename = path.split('/').pop().replace('.md', '')
      
      // Parse date and title from filename (YYYY-MM-DD-slug)
      const [dateStr, ...slugParts] = filename.split('-')
      const title = slugParts.join('-')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())

      return {
        slug: filename,
        title,
        date: new Date(dateStr),
        content: marked.parse(content)
      }
    }).sort((a, b) => b.date - a.date)
  },
  methods: {
    togglePost(slug) {
      this.expandedPost = this.expandedPost === slug ? null : slug
    },
    formatDate(date) {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style>
/* Keep the same styling as before */
.prose {
  @apply text-gray-700 dark:text-gray-300;
}
.prose img {
  @apply rounded-lg my-4 max-w-full;
}
.prose a {
  @apply text-blue-600 dark:text-blue-400 hover:underline;
}
.prose code {
  @apply bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm;
}
</style>
