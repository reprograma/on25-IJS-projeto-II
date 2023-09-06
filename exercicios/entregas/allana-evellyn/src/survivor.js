export class Survivor {
  name;
  damage;
  equipment;
  xpLevel;

  constructor(name, equipment, xpLevel) {
    this.name = name;
    this.damage = 0;
    this.ammount = equipment;
    this.xpLevel = xpLevel;
  }

  killZombie() {
    console.log("Zombie killed!");
  }

  turnIntoZombie() {
    if (this.injuries >= 3) {
      console.log("Survivor turned into a zombie!");
    } else {
      console.log(`Careful! You have ${this.damage} points of damage`);
    }
  }
}
