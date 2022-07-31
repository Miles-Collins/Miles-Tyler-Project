import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";



export class List {
  constructor(data){
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
    this.collapsed = data.collapsed || false    
  }

  get Template() {
    return `
    <form class="col-3 bg-dark text-light m-5">
    <div class="row">
      <div style="${this.color} class="col-12 bg-light text-dark" onclick="app.listController.toggleCollapse('${this.id}')">
        <h2 class="text-center">${this.name}</h2>
      </div>
      <div class="col-12 ${this.collapsed ? 'collapse' : ''}">

        ${this.ItemsTemplate}

      </div>
      <div class="col-12">
      <input class="" type="textbox" placeholder="Add Task...">
      <button class="btn text-light" onclick="">+</button>
      </div>
    </div>
    </form>
    `
  }

  get ItemsTemplate(){
    let template = ''
    ProxyState.items.filter(item => item.listId == this.id).forEach(item => template += item.Template)
    if(template){
      return template
    } else {
      return '<p> no items </p>'
    }
  }
}