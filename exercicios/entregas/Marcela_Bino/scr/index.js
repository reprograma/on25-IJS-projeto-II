//sobreviventes
//1. criar classe sobreviventes

class Survivor {
    name;
    
    static allSurvivors = [];

    constructor(name){
        this.name = name;
        this.harm = 0;
        this.constructor.allSurvivors.push({ 
            survivor: this.survivor
        })
    };

} 