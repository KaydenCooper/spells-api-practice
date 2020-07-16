import store from "../store.js";
import Spell from "../Models/Spell.js"

// @ts-ignore
const _api = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api",
    timeout: 3000
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

}

const service = new SpellsService();
export default service;
