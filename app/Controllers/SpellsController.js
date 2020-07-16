import _spellsService from "../Services/SpellsService.js";
import store from "../store.js";
import Spell from "../Models/Spell.js"
function _draw() {
  let template = ""
  store.State.spells.forEach(s => template += Spell.getSpells(s.name))
  document.getElementById("spells").innerHTML = template


}

//Public
export default class SpellsController {
  constructor() {
    store.subscribe("spells", _draw);
    _spellsService.getSpells()
  }

}
