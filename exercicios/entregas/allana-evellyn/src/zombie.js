class Zombie {
  constructor(level) {
    this.level = level;
    this.injuries = 0;
    this.actions = 1;
    this.attackSuccessRates = {
      Blue: 30,
      Yellow: 50,
      Orange: 70,
      Red: 100,
    };
  }

  attack(survivor) {
    if (this.actions <= 0) {
      console.log("The zombie cant attack");
    }

    const attackSuccessRate = this.attackSuccessRates[this.level];
    const attackPercentage = Math.floor(Math.random() * 100) + 1;

    if (attackPercentage <= attackSuccessRate) {
      console.log(`Zombie attacked ${survivor.name} and succeeded!`);
      survivor.takeInjury();
    } else {
      console.log("Zombie attacked and missed!");
    }

    this.actions -= 1;
  }

  receiveDamage() {
    this.injuries += 1;
    if (this.injuries >= 2) {
      this.die();
    }
  }

  die() {
    console.log("The zombie died!");
  }
}

module.exports = { Zombie };
