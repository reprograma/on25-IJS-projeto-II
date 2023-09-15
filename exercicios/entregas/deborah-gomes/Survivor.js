class Survivor {
    constructor(name) {
        this.name = name;
        this.harm = 0;
        this.actionsPerTurn = 3;
        this.experience = 0;
        this.equipmentInHand = [];
        this.equipmentInReserve = [];
        this.level = "Blue";

        Survivor.allSurvivors.push({
            survivor: this.name
        });
    }

    isAlive() {
        if (this.harm < 3) {
            console.log(`${this.name} is alive`);
        } else {
            this.dies();
        }
    }

    isHarmed() {
        if (this.harm < 3) {
            this.harm++;
            return this.harm;
        } else {
            this.dies();
        }
    }

    killsZombie() {
        this.experience++;
        if (this.experience === 6) {
            this.level = "Yellow";
        } else if (this.experience === 18) {
            this.level = "Orange";
        } else if (this.experience === 42) {
            this.level = "Red";
        }
    }

    dies() {
        console.log(`${this.name} is dead`);

        const indexToRemove = Survivor.allSurvivors.findIndex(
            (survivorObj) => survivorObj.survivor === this.name
        );

        if (indexToRemove !== -1) {
            Survivor.allSurvivors.splice(indexToRemove, 1);
        }
    }
}

Survivor.allSurvivors = [];

module.exports = { Survivor };
