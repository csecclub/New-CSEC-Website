<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full">
    <!-- Display the title as raw text, no formatting applied -->
    <h2 class="text-2xl mb-2 dark:text-white">{{ post.title }}</h2>
    <!-- Optionally display the date with formatting if provided -->
    <!-- <p v-if="post.date" class="text-gray-600 dark:text-gray-300 mb-4">{{ formatDate(post.date) }}</p> -->
    <!-- Render the newsletter content or other HTML -->
    <div v-html="post.content"></div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => ({
        title: '', // Default empty title
        //date: null, // Optional date
        content: '' // Default empty content
      })
    }
  },
  methods: {
    formatDate(date) {
      const d = new Date(date);
      return isNaN(d.getTime()) ? 'Invalid Date' : d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  } 
}
</script>

<style scoped>
/* Remove font-bold from h2 to avoid forced formatting, let the title be styled externally if needed */
h2 {
  margin-bottom: 0.5rem;
}

</style>

