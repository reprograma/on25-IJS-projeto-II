const Bag = require("./Bag");
const { DamageItem } = require("./DamageItem");
const SkillTree = require("./SkillTree");

class Survivor {
  name;
  stats = new SkillTree();
  bag = new Bag();
  rightHand = new DamageItem("Baseball Bat", 2, 2);
  leftHand = null;
  wound = 0;
  xp = 0;
  constructor(name) {
    this.name = name;
  }

  attack(hand = "R") {
    const attackItem = hand == "L" ? this.leftHand : this.rightHand;
    if (attackItem == null) {
    } else {
      const ap = attackItem.attack();
      return ap;
    }
  }
}
