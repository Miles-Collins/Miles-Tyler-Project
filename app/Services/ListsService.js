import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";


class ListsService{

  toggleCollapse(listId){

    let list = ProxyState.lists.find(l => l.id == listId)
    // @ts-ignore
    list.collapsed = !list.collapsed

    ProxyState.lists = ProxyState.lists
  }


createList(newTask){
  ProxyState.lists = [...ProxyState.lists, new List(newTask)]
}









}

export const listsService = new ListsService()