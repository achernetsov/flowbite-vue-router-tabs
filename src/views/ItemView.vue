<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, RouterLink, RouterView } from 'vue-router';
import type { Item } from '../model/item';
import { findItem } from '../db'

const route = useRoute()
const loading = ref(true)
const item = ref<Item>()

onMounted(() => {
    item.value = findItem(parseInt(route.params.id as string))
    loading.value = false
    console.info(`Mounted ${JSON.stringify(item.value)}`)
})
</script>

<template>
    <div v-if="!loading">
        <h2 class="mb-2 text-lg font-semibold text-gray-900">{{ item!.name }}</h2>

        <!-- https://flowbite.com/docs/components/tabs/#tabs-with-underline -->
        <div id="tabsButtons"
            class="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
            <ul class="flex flex-wrap -mb-px">
                <li class="mr-2">
                    <!-- https://router.vuejs.org/guide/essentials/nested-routes.html -->
                    <RouterLink :to="`/items/${route.params.id}/description`"
                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">
                        Description
                    </RouterLink>
                </li>
                <li class="mr-2">
                    <RouterLink :to="`/items/${route.params.id}/stats`"
                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">
                        Stats
                    </RouterLink>
                </li>
            </ul>
        </div>
        <RouterView />
    </div>
</template>