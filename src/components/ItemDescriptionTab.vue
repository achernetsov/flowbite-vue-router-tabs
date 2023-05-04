<script setup lang="ts">
import { onMounted } from 'vue';
import { useItemStore } from '@/stores/currentItemStore';
const itemStore = useItemStore()

onMounted(() => {
    console.info(`Mounted description tab`)
})
</script>

<template>
    <p>{{ itemStore.item?.description }}</p>
</template>