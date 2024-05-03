<template>
    <svg :style="{width, height}">
        <use :xlink:href="prefix+name" :fill="color"></use>
    </svg>
</template>

<script setup lang="ts">
defineProps({
    prefix: {
        type: String,
        default: '#icon-'
    },
    name: String,
    color: {
        type: String,
        default: ''
    },
    height: {
        type: String,
        default: '16px'
    },
    width: {
        type: String,
        default: '16px'
    },
})
</script>

<style scoped>

</style>