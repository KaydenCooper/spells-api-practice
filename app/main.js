import SpellsController from "./Controllers/SpellsController.js";

class App {
  spellsController = new SpellsController();
  constructor() {

  }
}

window["app"] = new App();
