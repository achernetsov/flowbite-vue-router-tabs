<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, RouterView } from 'vue-router';
import { findItem } from '../db'
import { useItemStore } from '../stores/currentItemStore'

import TabButton from '../components/TabButton.vue'

const itemStore = useItemStore()
const route = useRoute()

function activeTab() {
    // console.info(`${route.name?.toString()}`)
    // console.info(`${Tabs.itemDescription.}`)
}

onMounted(() => {
    itemStore.item = findItem(parseInt(route.params.id as string))
    console.info(`Mounted item view: ${JSON.stringify(itemStore.item)}`)
    console.info(`${route.path}`)
})
</script>

<template>
    <div v-if="itemStore.item">
        <h2 class="mb-2 text-lg font-semibold text-gray-900">Item: {{ itemStore.item.name }}</h2>

        <!-- https://flowbite.com/docs/components/tabs/#tabs-with-underline -->
        <div id="tabsButtons" class="mb-4 text-sm font-medium text-center text-gray-500 border-b border-gray-200">
            <ul class="flex flex-wrap -mb-px">
                <TabButton title="Description" link="itemDescription" :active="route.name?.toString() == 'itemDescription'" />
                <TabButton title="Stats" link="itemStats" :active="route.name?.toString() == 'itemStats'" />
            </ul>
        </div>
        <div id="tab-content" class="text-sm text-gray-500">
            <RouterView />
        </div>
    </div>
</template>