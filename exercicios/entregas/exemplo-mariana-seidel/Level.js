let { Survivor } = require('./Survivor')

class Level {
    level;
    experience;

    constructor(survivor) {
        this.level = survivor.level;
        if (!survivor.level === 'Blue') {
            survivor.level === this.level
        }
        this.experience = survivor.experience;
    }

    changeLevel() {
        if (this.experience >= 42) {
            this.level = 'Red'
            return `Seu nível é: ${this.level}.`
        } else if (this.experience >= 18 && this.experience < 42) {
            this.level = 'Orange'
            return `Seu nível é: ${this.level}.`
        } else if (this.experience >= 6) {
            this.level = 'Yellow'
            return `Seu nível é: ${this.level}.`
        }
    }
}

module.exports = { Level }

