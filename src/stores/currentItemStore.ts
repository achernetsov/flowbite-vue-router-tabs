// currently opened item
// store used so tabs can access item without loading it, so item loaded once in parent ItemView

import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Item } from '../model/item'

export const useItemStore = defineStore('item', () => {
    const item = ref<Item>()
  
    return { item }
  })