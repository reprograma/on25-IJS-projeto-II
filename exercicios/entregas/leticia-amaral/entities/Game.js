const Survivor = require("./Survivor");
const Zombie = require("./Zombie");
const Levels = require("../constants/levels");

class Game {
  allSurvivors = Survivor.allSurvivors;
  allZombies = Zombie.allZombies;
  levelGame = Levels.BLUE;

  addSurvivor(name) {
    const survivor = new Survivor(name);

    console.log(`${survivor.name} joined the survivor group`);
  }

  startGame() {
    const numSurvivors = this.allSurvivors.length;
    console.log({numSurvivors})

    for(var i = 0; i > numSurvivors; i++) {
      console.log(this.allZombies)
      new Zombie();
    }

    console.log(`Zombie horde spotted near survivor camp. Survivors count: ${numSurvivors}, zombies count: ${this.allZombies.length}`);
  }
}

module.exports = Game;