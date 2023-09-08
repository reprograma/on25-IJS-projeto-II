const {Survivor} = require("./Survivor");
const {Zombi} = require("./Zombi");

class Matches {

    constructor(level){
        this.survivor = new Survivor()
        this.zombi = new Zombi()
        this.survivors = [];
        this.level = level;

    }

    addSurvivor(survivor){
        if(survivor instanceof Survivor){
            this.survivors.push(survivor);
            this.level = Math.max(this.level, survivor.level)    
            return `${survivor.name} adicionado com succeso`
        }else{
            return 'usuário inválido'
        }
        
    }
    
}

module.exports = {Matches};