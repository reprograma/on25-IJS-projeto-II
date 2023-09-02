class Survivor {
  constructor(name) {
    this.name = name;
    this.health = 0;
    this.actions = 3;
    this.level = 'Blue';
    this.experience = 0;
    this.equipment = {
      hands: [],
      reserve: [],
    };
    this.skillTree = {
      Blue: [],
      Yellow: ['+1 Action'],
      Orange: ['+1 Action', '+1 Damage'],
      Red: ['+1 Action', '+1 Damage', 'Hidden Treasure'],
    };
  }
}