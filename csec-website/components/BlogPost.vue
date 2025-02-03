<!-- components/BlogPost.vue -->
<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full">
    <img 
      v-if="post.image" 
      :src="post.image" 
      :alt="post.title"
      class="w-full h-48 object-cover"
    >
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-2 dark:text-white">{{ post.title }}</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">{{ formatDate(post.date) }}</p>
      <p class="text-gray-700 dark:text-gray-200 line-clamp-3">{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>
