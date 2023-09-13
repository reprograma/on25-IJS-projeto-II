const LDamageItems = {
  baseballBat: { name: "Baseball Bat", damage: 2, duration: 2 },
  pan: { name: "Pan", damage: 1, duration: 3 },
  axe: { name: "Axe", damage: 2, duration: 4 },
  pistol: {
    name: "Pistol",
    damage: 3,
    duration: Number.POSITIVE_INFINITY,
    ammo: 0,
  },
};

const LUsefulItems = {
  waterBottle: { name: "Water Bottle", healing: 0, scape: 1, ammo: 0 },
  hamburger: { name: "Hamburger", healing: 1, scape: 1, ammo: 0 },
  medKit: { name: "Med Kit", healing: 2, scape: 0, ammo: 0 },
  bigMedKit: { name: "Big Med Kit", healing: 3, scape: 0, ammo: 0 },
  ammo: { name: "Ammo", healing: 0, scape: 0, ammo: 6 },
};

module.exports = { LDamageItems, LUsefulItems };
