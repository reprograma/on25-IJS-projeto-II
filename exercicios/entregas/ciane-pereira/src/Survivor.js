class Survivor {
    name;
    totalInjuries = 0;
    actions = 3;
    equipment = {};
    experience = 0;
    level = 'blue';
    skillTree = []; 

    static allSurvivors = [];

    constructor(name) {
        this.name = name;
        this.totalInjuries = 0;
        this.constructor.allSurvivors.push({ survivor: this });
    }

    injuries() {
        this.totalInjuries++;

        if(this.totalInjuries >= 3) {
            return 'Você morreu!! Fim do jogo.';
        } else {
            return `Você tem o total de ${this.totalInjuries} ferimentos!`;
        }
    }

    killZumbi() {
        this.experience += 1;
        return 'Você matou um zumbi!';
    }

    gameOver() {
       if(this.experience === 150) {
        return 'O jogo acabou!!';
       } 
    }
}

module.exports = { Survivor }