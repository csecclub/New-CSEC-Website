export default {
  modules: [
    '@nuxt/content',
    '@nuxt/ui' // If you're using NuxtUI
  ],
  content: {
    // Optional configuration
    markdown: {
      remarkPlugins: [],
      rehypePlugins: []
    }
  }
}
