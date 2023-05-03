import type { Item } from './model/item'

export const items: Item[] = [
    { id: 1, name: 'first', description: 'First item perfect description', amount: 10 },
    { id: 2, name: 'second', description: 'Description of amazing second item', amount: 20 },
]

export function findItem(id: number): Item {
    return items.find(item => item.id == id)!
}