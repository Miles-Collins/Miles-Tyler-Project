import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { List } from "./Models/List.js"
import { Item } from "./Models/Item.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/List').List[]} */
  lists = [
    new List({
      id: 47,
      name: "Groceries",
      color: 'purple',
      collapsed: true
    })
  ]

  /** @type {import('./Models/Item').Item[]} */
  items = [
    new Item({
      name: 'Chores',
      listId: 12
    })
  ]
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
