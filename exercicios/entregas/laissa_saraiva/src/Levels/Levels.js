class Levels {
  experience;
  currentLevel;

  constructor() {
    this.experience = 0;
    this.currentLevel = "Blue";
  }

  setCurrentLevel() {
    const pointsOfExperience = this.experience;

    if (pointsOfExperience >= 6 && pointsOfExperience <= 17) {
      this.currentLevel = "Yellow";
    } else if (pointsOfExperience >= 18 && pointsOfExperience <= 42) {
      this.currentLevel = "Orange";
    } else {
      this.currentLevel = "Red";
    }
  }
}

const nivel1 = new Levels();
nivel1.experience = 18
console.log(nivel1);
console.log(nivel1.currentLevel);
console.log(nivel1.setCurrentLevel());
console.log(nivel1.currentLevel);
module.exports = { Levels };
