const SkillTree = require("./SkillTree");

class Survivor {
  name;
  skillTree;
  stats = new SkillTree();
  bag = new Bag();
  rightHand = null;
  leftHands = null;
  wound = 0;
  xp = 0;
  constructor(name) {
    this.name = name;
  }
}

class Bag {}

class Items {
  static damageItems = [
    (baseballBat = { damage: 2, duration: 2 }),
    (pan = { damage: 1, duration: 3 }),
    (ax = { damage: 2, duration: 4 }),
    (pistol = { damage: 3, ammo: 0, duration: Number.POSITIVE_INFINITY }),
  ];
  static useful = [waterBottle, food, medKit, bigMedKit];
}
//bag carrega até 7 itens
