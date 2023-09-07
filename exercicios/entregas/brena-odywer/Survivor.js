class Survivor {
    name;
    harm = 0;
    actionsPerTurn = 3
    experience = 0;
    equipmentInHand = []
    equipmentInReserve =  []
    level = "Blue"


    static allSurvivors = [];

    constructor(name){
        this.name = name;
        this.constructor.allSurvivors.push({
            survivor: this.name
        })
    };

    isAlive () {
        if(this.harm >= 3) {
            return console.log (`${this.name} is dead`)
        } else {
            return console.log (`${this.name} is alive`)
        }
    };

    isHarmed() {
        if (this.harm < 3) {
            this.harm++
            return this.harm
        }

        if  (this.harm === 3) {
            this.dies()
        }
    }

    killsZombine(){
        this.experience++;
        if(this.experience === 6){
            this.level = "Yellow";
        } else if (this.experience === 18){
            this.level = "Orange";
        } else if (this.experience === 42){
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






module.exports = { Survivor }
