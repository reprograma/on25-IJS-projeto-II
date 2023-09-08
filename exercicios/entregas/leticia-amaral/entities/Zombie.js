class Zombie {
  injuries = 0;
  alive = true;

  static allZombies = [];

  constructor() {
    Zombie.allZombies.push(this)
  }

  hurt() {
    if(this.injuries < 2) {
      this.injuries++;
    } else {
      this.alive = false;
    }
  }
}

module.exports = Zombie;