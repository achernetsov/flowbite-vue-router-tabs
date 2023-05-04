<script setup lang="ts">
import { onMounted } from 'vue';
import { useItemStore } from '@/stores/currentItemStore';
const itemStore = useItemStore()

onMounted(() => {
    console.info(`Mounted stats tab`)
})
</script>

<template>
    <p>Amount: {{ itemStore.item?.amount }}</p>
</template>