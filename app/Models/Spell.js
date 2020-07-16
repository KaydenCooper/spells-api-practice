export default class Spell {
    constructor(data) {
        this.name = data.name
        this.id = data.id
    }

    get Template() {
        return ``
    }

    static getSpells(name) {
        return `<button class="btn btn-info btn-block btn-lg text-capitalize my-2" onclick="app.spellsController.getSpellInfo('${name}')">${name}</button>`
    }
}