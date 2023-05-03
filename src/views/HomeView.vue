<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { items } from '../db';
</script>

<template>
  <main>
    <div>
      <h2 class="mb-2 text-lg font-semibold text-gray-900">Choose item:</h2>
      <ul class="max-w-md space-y-1 list-disc list-inside">
        <li v-for="item in items">
          <RouterLink class="font-medium text-blue-600 dark:text-blue-500 hover:underline" :to="`/items/${item.id}`">
            Item: {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </main>
</template>
