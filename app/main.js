import SpellsController from "./Controllers/SpellsController.js";

class App {
  _spellsController = new SpellsController();
  constructor() {

  }
}

window["app"] = new App();
