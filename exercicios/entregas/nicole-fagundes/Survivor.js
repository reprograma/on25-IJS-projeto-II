const Equipment = require("./Equipment");

class Survivor extends Equipment{
    name;
    wound = 0;
    // árvore de habilidades
    //xp = 0
    //nivel = undefined

    constructor(name){
        super();
        this.name = name;
    }

    wounds(attack){
        if(attack === true && this.wound < 3){
            this.wound += 1;
            console.log(`Você está com ${this.wound} ferimento(s). O máximo de ferimentos é 3!`)
        }else{
            console.log("Você atingiu o máximo de ferimentos e está morto ):");
        }
    }
}

module.exports = Survivor;