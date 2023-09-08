const Bag = require("./Bag");
const Skills = require("./SkillsThree");

class Survivor {
  name;
  injuries = 0;
  experience = 0;
  actionsPerTurn = 3;
  skills = new Skills();
  bag = new Bag();

  static allSurvivors = [];

  constructor(name) {
    this.name = name;
    Survivor.allSurvivors.push(this);
  }

  sufferInjury() {
    if (this.injuries < 3) {
      this.injuries++;
      this.checkEquipmentCapacity();
    }
  }

  addExperience(points) {
    this.experience += points;
    this.skills.checkLevelUp(this.experience);
  }

  checkEquipmentCapacity() {
    this.bag.checkCapacity(this.injuries);
  }
}

module.exports = Survivor;