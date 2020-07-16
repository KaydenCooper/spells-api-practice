import _spellsService from "../Services/SpellsService.js";
import store from "../store.js";
import Spell from "../Models/Spell.js"
function _drawSpells() {
  let template = ""
  store.State.spells.forEach(s => template += Spell.getSpells(s))
  document.getElementById("spells").innerHTML = template

}

function drawSpellInfo() {
  document.getElementById("spell-info").innerHTML = store.State.spellsInfo.Template
}
function drawMySpells() {
  let template = ''
  let spells = store.State.mySpells;
  spells.forEach(spell => template += spell.Template)
  document.getElementById("my-spells").innerHTML = template
}

//Public
export default class SpellsController {
  constructor() {
    store.subscribe("spells", _drawSpells);
    store.subscribe("spellsInfo", drawSpellInfo);
    store.subscribe("mySpells", drawMySpells)
    _spellsService.getSpells()
  }
  getSpellsInfo(spellId) {
    _spellsService.getSpellsInfo(spellId)
  }
  addSpell() {
    _spellsService.addSpell()
  }
  getMySpells() {
    _spellsService.getMySpells()
  }
}
