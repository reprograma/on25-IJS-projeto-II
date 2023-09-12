class SkillTree {
  static typeLv = [
    (blue = { typeLv: "blue", maximumHealth: 3, actions: 3 }),
    (yellow = { typeLv: "yellow", maximumHealth: 4, actions: 3 }),
    (orange = { typeLv: "orange", maximumHealth: 4, actions: 4 }),
    (red = { typeLv: "red", maximumHealth: 4, actions: 5 }),
  ];

  lv = this.typeLv.blue;

  lvUP(xp) {
    if (xp === 6) {
      lv = SkillTree.typeLv.yellow;
    } else if (xp === 18) {
      lv = SkillTree.typeLv.orange;
    } else if (xp === 42) {
      lv = SkillTree.typeLv.red;
    } else console.log("Ainda nao da para dar LvUP");
  }
}

module.exports = SkillTree;
