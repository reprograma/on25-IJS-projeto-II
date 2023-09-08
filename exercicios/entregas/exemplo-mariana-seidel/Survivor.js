class Survivor {
    name;
    totalInjuries;
    actions = 3;
    equipment = {};
    level = 'Blue';
    experience = 0;
    skillTree = [];

    static allSurvivors = [];

    constructor(name) {
        this.name = name;
        this.totalInjuries = 0;
        this.constructor.allSurvivors.push({ survivor: this });
    }

    injuries() {
        this.totalInjuries++;

        if (this.totalInjuries >= 3) {
            return 'Fim do jogo. Você morreu!'
        } else {
            return `Cuidado, você possui o total de ${this.totalInjuries} ferimento(s)!`
        }
    }

    killZumbi() {
        this.experience += 1;
        return 'Zumbi morto!'
    }

    endGame(){
        if(this.experience === 150){
            return `Fim do jogo!`
        }
    }
}

module.exports = { Survivor }

