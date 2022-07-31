import { generateId } from "../Utils/generateId.js";





export class Item {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.listId = data.listId
  }

  get Template() {
    return `
    <li>${this.name}</li>
    `
  }
}
    // <div class="col-12 d-flex justify-content-between">
    //   <p>${this.name}</p>
    //   <i class="mdi mdi-delete-forever selectable px-2" onclick="app.itemsController.deleteItem('${this.id}')"></i>
    // </div>