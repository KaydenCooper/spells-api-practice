import store from "../store.js";
import Spell from "../Models/Spell.js"

// @ts-ignore
const _api = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api",
    timeout: 10000
})



class SpellsService {
    constructor() {

    }
    getSpells() {

        _api.get("spells").then(res => {
            console.log(res);
            store.commit("spells", res.data.map(rawSpellData => new Spell(rawSpellData)))
        }).catch(err => console.error(err))
    }
    getSpellsInfo(spellId) {
        // debugger
        _api.get("spells/" + spellId).then(res => {
            console.log(res.data)
            store.commit("spellsInfo", new Spell(res.data))

        }).catch(err => console.error(err))

    }
    addSpell() {

        let newSpell = store.State.spellsInfo
        newSpell.description = newSpell.description.join("")
        _api.post("codyc/spells", newSpell).then(res => {
            console.log(res);
            this.getMySpells()

        }).catch(err => console.error(err))
    }
    getMySpells() {

        _api.get("codyc/spells").then(res => {
            console.log(res)
            store.commit("mySpells", res.data.data.map
                (rawSpellData => new Spell(rawSpellData)))
            console.log(store.State.mySpells)
        }).catch(err => console.error(err))
    }
}

const service = new SpellsService();
export default service;
