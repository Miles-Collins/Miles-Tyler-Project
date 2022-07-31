import { ItemsController } from "./Controllers/ItemsController.js";
import { ListController } from "./Controllers/ListController.js";

class App {
  listController = new ListController();
  itemsController = new ItemsController();
}

window["app"] = new App();
