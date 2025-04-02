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
          <h2 class="text-2xl dark:text-white">{{ post.title }}</h2>
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
import { marked } from 'marked';

export default {
  data() {
    return {
      posts: [],
      expandedPost: null
    };
  },
  async mounted() {
    // Get all blog files (Markdown or HTML)
    const files = import.meta.glob('~/blogs/*.{md,html}', { eager: true, as: 'raw' });

    this.posts = Object.entries(files).map(([path, content]) => {
      // Extract filename from path
      const filename = path.split('/').pop().replace(/\.(md|html)$/, '');
      
      // Parse date and title from filename (YYYY-MM-DD-slug), if present
      const parts = filename.split('-');
      let dateStr = null;
      let title = filename;
      if (parts.length >= 3 && /^\d{4}-\d{2}-\d{2}$/.test(`${parts[0]}-${parts[1]}-${parts[2]}`)) {
        dateStr = `${parts[0]}-${parts[1]}-${parts[2]}`;
        title = parts.slice(3).join('-'); // Raw slug, no formatting
      }

      // Process content based on file type
      const isMarkdown = path.endsWith('.md');
      const processedContent = isMarkdown ? marked.parse(content) : content;

      return {
        slug: filename,
        title: title, // Use raw title, no capitalization
        date: dateStr ? new Date(dateStr) : null, // Null if no date
        content: processedContent
      };
    }).sort((a, b) => (b.date || 0) - (a.date || 0)); // Sort, handle null dates
  },
  methods: {
    togglePost(slug) {
      this.expandedPost = this.expandedPost === slug ? null : slug;
    },
    formatDate(date) {
      if (!date || isNaN(date.getTime())) return 'Date Not Available';
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
};
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
