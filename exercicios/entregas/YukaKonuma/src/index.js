class Survivor {
  name;
  skillTree;
  leftHands = null;
  rightHand = null;
  wound = 0;
  actions = 3;
  constructor(name, skillTree, bag) {
    this.name = name;
    this.skillTree = skillTree;
  }
}

class Rules {}

class SkillTree {}

class Item {
  static damage = [baseballBat, pan, ax, pistol];
  static useful = [waterBottle, food, medKit];
}
//bag carrega até 7 itens
class Bag {}
