let { Survivor } = require('./Survivor')

class Match {
    survivors;
    level;

    constructor() {
        this.survivors = Survivor.allSurvivors.length
        if (this.survivors === 0) {
            return `Fim do jogo!`
        }

        const filterLevel = Survivor.allSurvivors.filter((element) => {
            if (element === 'Red') {
                return element.level
            } else if (element === 'Orange') {
                return element.level
            } else if (element.level === 'Yellow') {
                return element.level
            } else {
                return element.level
            }
        })

        this.level = filterLevel;
    }

    addSurvivors(newPlayers) {
        if (!(newPlayers instanceof Survivor)) {
            return 'Insira um jogador válido.'
        }
        return Survivor.allSurvivors
    }
}

module.exports = { Match }







