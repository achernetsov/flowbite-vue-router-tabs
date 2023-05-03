<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex flex-col h-screen">
    <h1 class="px-6 py-4 bg-white border-b-2 border-indigo-100">
      <RouterLink to="/">Tailwind CSS + Flowbite tabs + Vue + Vue router</RouterLink>
    </h1>
    <div>
      <!-- <main class="flex-1 bg-gray-200"> -->
      <main class="flex-1">
        <div class="container mx-auto px-6 py-8">
          <RouterView />
        </div>
      </main>
    </div>


  </div>
</template>
