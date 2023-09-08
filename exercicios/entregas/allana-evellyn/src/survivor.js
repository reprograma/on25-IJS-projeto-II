class Survivor {
  constructor(name) {
    this.name = name;
    this.experience = 0;
    this.level = "Blue";
    this.injuries = 0;
    this.actions = 3;
    this.handEquipment = [];
    this.bagEquipment = [];
    this.skils = {};
  }

  winExperience(points) {
    this.experience += points;
    this.confirmSurvivorLevel();
  }

  confirmSurvivorLevel() {
    const survivorLevel = {
      Blue: 0,
      Yellow: 6,
      Orange: 18,
      Red: 42,
    };

    for (const level in survivorLevel) {
      if (this.experience >= survivorLevel[level]) {
        this.level = level;
      }
    }
  }

  addBagEquipment(equipment) {
    if (this.bagEquipment.length < 7) {
      this.bagEquipment.push(equipment);
      console.log(`You stored ${equipment} in your bag!`);
    } else {
      console.log(
        "You dont have enough space in your bag. Drop an item and then try again."
      );
    }
  }

  addHandEquipment(equipment) {
    if (this.handEquipment.length < 2) {
      this.handEquipment.push(equipment);
      console.log(`You picked a ${equipment} on your hand!`);
    } else {
      console.log(
        "Your hands are full. Please drop an item or store it on your bag."
      );
    }
  }

  takeInjury() {
    this.injuries += 1;
    if (this.injuries >= 3) {
      this.turnIntoZombie();
    }
  }

  attackZombie() {
    if (this.actions > 0) {
      console.log(`${this.name} attacked a zombie!`);
      this.actions -= 1;
      this.winExperience(1);
      zombie.receiveDamage();
    } else {
      console.log(`${this.name} you dont have enough actions to attack!`);
    }
  }

  turnIntoZombie() {
    console.log(`${this.name} died and turned into a zombie!`);
  }
}

module.exports = { Survivor };
