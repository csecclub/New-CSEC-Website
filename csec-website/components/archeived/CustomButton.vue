<template>
    <button 
    :class="[
        'buttton',
        {'primary': color === 'primary'},
        {'success': color === 'success'}
    ]"
    >
        <NuxtLink :to="to">{{ label }}</NuxtLink>
    </button>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        }
    }
}
</script>