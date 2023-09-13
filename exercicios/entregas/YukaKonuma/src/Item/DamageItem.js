const { Item } = require("./Item");

class DamageItem extends Item {
  name;
  damage;
  duration;
  ammo;

  constructor({ name, damage, duration, ammo }) {
    super(name);
    this.damage = damage;
    this.duration = duration;
    this.ammo = ammo ?? null;
  }

  attack() {
    return this.damage;
  }
}
exports.DamageItem = DamageItem;
