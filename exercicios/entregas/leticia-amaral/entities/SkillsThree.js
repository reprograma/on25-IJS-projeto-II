const Levels = require("../constants/levels");

class SkillsThree {
  level = Levels.BLUE;
  allSkills = [];

  checkLevelUp(experience) {
    if(experience >= Levels.UPGRADE_ORANGE) {
      this.level = Levels.RED;
    } else if (experience >= Levels.UPAGRADE_YELLOW) {
      this.level = Levels.ORANGE;
    } else if (experience >= Levels.UPGRADE_BLUE) {
      this.level = Levels.YELLOW;
    } else {
      this.level = Levels.BLUE;
    }
  }
}

module.exports = SkillsThree;