const Equipment = {
  BASEBALL_BAT: {
    name: "Baseball bat",
    range: 0,
    dado: 1,
    precision: 3,
    damage: 1,
    class: Class.FIGHT
  },
  FRYING_PAN: {
    name: "Frying pan",
    range: 0,
    dado: 1,
    precision: 6,
    damage: 1,
    class: Class.FIGHT
  },
  FIRE_AXE: {
    name: "Fire axe",
    range: 0,
    dado: 1,
    precision: 4,
    damage: 2,
    class: Class.FIGHT
  },
  PISTOL: {
    name: "Pistol",
    range: 1,
    dado: 1,
    precision: 4,
    damage: 1,
    class: Class.FIGHT
  },
  BOTTLE_WATER: {
    name: "Bottle of water",
    class: Class.USABLEAXE
  },
  FOOD: {
    name: "Food",
    class: Class.USABLE
  },
  FIRST_AID_KIT: {
    name: "First aid kit",
    class: Class.USABLE
  }
}

const Class = {
  FIGHT: "fight",
  USABLE: "usable"
}

module.exports = Equipment;