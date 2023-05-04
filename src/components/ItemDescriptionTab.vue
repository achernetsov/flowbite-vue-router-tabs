<script setup lang="ts">
import { onMounted } from 'vue';
import { useItemStore } from '@/stores/currentItemStore';
const item = useItemStore().item

onMounted(() => {
    console.info(`Mounted description tab`)
})
</script>

<template>
    <p>{{ item?.description }}</p>
</template>