<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, RouterLink, RouterView } from 'vue-router';
import { findItem } from '../db'
import { useItemStore } from '../stores/currentItemStore'

const itemStore = useItemStore()
const route = useRoute()

onMounted(() => {
    itemStore.item = findItem(parseInt(route.params.id as string))
    console.info(`Mounted item view: ${JSON.stringify(itemStore.item)}`)
})
</script>

<template>
    <div v-if="itemStore.item">
        <h2 class="mb-2 text-lg font-semibold text-gray-900">{{ itemStore.item.name }}</h2>

        <!-- https://flowbite.com/docs/components/tabs/#tabs-with-underline -->
        <div id="tabsButtons"
            class="mb-4 text-sm font-medium text-center text-gray-500 border-b border-gray-200">
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
        <div id="tab-content" class="text-sm text-gray-500">
            <RouterView />
        </div>
    </div>
</template>