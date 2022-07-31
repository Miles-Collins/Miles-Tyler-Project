import { ProxyState } from "../AppState.js";
import { Item } from "../Models/Item.js";






class ItemsService{
  createItem(newItem) {
    ProxyState.items = [...ProxyState.items, new Item(newItem)]
  }
}


export const itemsService = new ItemsService()