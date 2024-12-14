<script setup>
import { ref } from 'vue';

// State variables
const name = ref('');
const email = ref('');
const message = ref('');
const status = ref('');

// Form submission handler
const handleSubmit = async (e) => {
  e.preventDefault();
  status.value = 'sending';
  
  try {
    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('message', message.value);

    // Replace the URL with your actual Getform endpoint
    const response = await fetch('https://getform.io/f/bmdpoexa', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      status.value = 'success';
      // Clear fields after success
      name.value = '';
      email.value = '';
      message.value = '';
    } else {
      status.value = 'error';
    }
  } catch (error) {
    status.value = 'error';
  }
};
</script>

<template>
  <div class="max-w-2xl mx-auto shadow-lg rounded-lg p-6">
    <h1 class="text-2xl font-bold mb-4">
      Send us an <span class="text-blue-500">email</span>
    </h1>
    <p class="mb-6">We'd love to hear from you!</p>

    <form @submit="handleSubmit" class="space-y-4">
      <div>
        <label for="formName" class="block text-sm font-medium mb-1">Name</label>
        <input
          id="formName"
          type="text"
          name="name"
          v-model="name"
          placeholder="Enter your name"
          required
          class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label for="formEmail" class="block text-sm font-medium mb-1">Email address</label>
        <input
          id="formEmail"
          type="email"
          name="email"
          v-model="email"
          placeholder="Enter email"
          required
          class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label for="formMessage" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          id="formMessage"
          name="message"
          rows="3"
          v-model="message"
          placeholder="Enter your message"
          required
          class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      <input type="hidden" name="_gotcha" style="display: none;" />

      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 disabled:bg-gray-400"
        :disabled="status === 'sending'"
      >
        {{ status === 'sending' ? 'Sending...' : 'Send Email' }}
      </button>
    </form>

    <div v-if="status === 'success'" class="mt-4 text-green-600 text-sm">
      Your email has been sent successfully!
    </div>
    <div v-if="status === 'error'" class="mt-4 text-red-600 text-sm">
      There was an error sending your email. Please try again.
    </div>
  </div>
</template>

