const { Levels } = require("../Levels/Levels");

class Survivor {
  name;
  injury = 0;
  MAX_OF_INJURIES = 3
  #ACTIONS = 3;
  level;

  constructor(name) {
    this.name = name;
    this.level = new Levels();
  }

  get action() {
    return this.#ACTIONS;
  }

  addInjury() {
    this.injury += 1;
  }
}

module.exports = {Survivor};