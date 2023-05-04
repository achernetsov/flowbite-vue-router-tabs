import type { Item } from './model/item'

export const items: Item[] = [
    { id: 1, name: 'first', description: 'First description', amount: 10 },
    { id: 2, name: 'second', description: 'Second description', amount: 20 },
]

export function findItem(id: number): Item {
    return items.find(item => item.id == id)!
}