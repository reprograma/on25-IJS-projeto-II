export class Zombie {
  die;
  attack;
  constructor(die) {
    this.die = die;
  }
  attack() {
    this.damage++;
  }
}
