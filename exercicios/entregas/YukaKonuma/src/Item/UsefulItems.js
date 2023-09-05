const { Item } = require("./Item");

class UsefulItems extends Item {
  name;
  healing;
  scape;
  ammo;
  constructor({ name, healing, scape, ammo }) {
    super(name);
    this.healing = healing ?? 0;
    this.scape = scape ?? 0;
    this.ammo = ammo ?? 0;
  }
}
