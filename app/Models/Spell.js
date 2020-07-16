export default class Spell {
    constructor(data) {
        this.name = data.name
        this.id = data.id
        this._id = data._id
        this.range = data.range
        this.description = data.desc || data.description
        this.duration = data.duration
        this.school = data.school
        this.user = data.user
    }

    get Template() {
        let template = /* html */ `
        <div class=" border border-rounded shadow-lg text-center text-white bg-dark">
        <h2>Name: ${this.name}</h2>
        <h2>Description: ${this.description}</h2>
        <h2>Range: ${this.range}</h2>
        <h2>Duration: ${this.duration}</h2>
        <h2>School: ${this.school}</h2>
        
        
        </div>
        `
        if (this.user) {
            template += `
            <button class="btn btn-danger my-0 rounded-0 btn-block btn-sm" onclick="app.spellsController.deleteSpell('${this.id}')">Remove Spell</button>
            </div>
            `
        }
        else {
            template += `
            <button class="btn btn-success my-0 rounded-0 btn-block btn-sm" onclick="app.spellsController.addSpell('${this._id}')">Add to My Spells</button>
            </div>
            `
        }
        return template
    }

    static getSpells(spell) {
        return `<button class="btn btn-info btn-block btn-lg text-capitalize my-2" onclick="app.spellsController.getSpellsInfo('${spell.id}')">${spell.name}</button>`
    }
}