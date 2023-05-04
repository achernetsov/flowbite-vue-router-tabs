<script setup lang="ts">
import { useItemStore } from '@/stores/currentItemStore';
const item = useItemStore().item
</script>

<template>
    <p>Amount: {{ item?.amount }}</p>
</template>