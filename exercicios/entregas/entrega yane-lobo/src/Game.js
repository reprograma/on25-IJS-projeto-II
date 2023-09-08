const Survivor = require('./Survivor');

class Game {
  constructor() {
    this.survivors = [];
    this.gameLevel = "Blue";
    this.zombiesPerRound = 1;
    this.zombieAttackChance = 0.3;
  }

  addSurvivor(survivor) {
    this.survivors.push(survivor);
    this.updateGameLevel();
  }

  updateGameLevel() {
    const survivorLevels = this.survivors.map((survivor) => survivor.level);
    this.gameLevel = this.findMaxSurvivorLevel(survivorLevels);
  }
  
  findMaxSurvivorLevel(levels) {
    const maxLevel = "Blue";
    return levels.includes("Red") ? "Red" : maxLevel;
  }

  addZombies() {
    const level = this.survivors.length > 0 ? this.gameLevel : "Blue";
    if (level === "Blue") {
      this.zombiesPerRound = 1;
      this.zombieAttackChance = 0.3;
    } else if (level === "Yellow") {
      this.zombiesPerRound = 2;
      this.zombieAttackChance = 0.5;
    } else if (level === "Orange") {
      this.zombiesPerRound = 3;
      this.zombieAttackChance = 0.7;
    } else if (level === "Red") {
      this.zombiesPerRound = 4;
      this.zombieAttackChance = 1.0;
    }
  }
}

module.exports = Game;
