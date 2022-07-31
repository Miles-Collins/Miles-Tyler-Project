import { ProxyState } from "../AppState.js";
import { listsService} from "../Services/ListsService.js";

function _draw() {
  let template = ''
  let list = ProxyState.lists
  list.forEach(t => template += t.Template)
  document.getElementById('app').innerHTML = template
}


export class ListController {
  constructor(){
    ProxyState.on('lists', _draw)
    // ProxyState.on('items', _draw)
    // ProxyState.on('list', saveState)
    // ProxyState.on('items', saveState)
    _draw()
  }

  viewList(){
    _draw()
  }


  toggleCollapse(listId){
    listsService.toggleCollapse(listId)
  }
  createList() {
    console.log('form submitted')
    window.event.preventDefault()
    let form = window.event.target
    console.log(form)

    let newList = {
      name: form.name.value,
      color: form.color.value
    }
    listsService.createList(newList)
    form.reset()
    _draw()
  }
}