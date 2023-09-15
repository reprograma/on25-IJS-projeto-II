const Skills = {
  DAMAGE: "+1 damage",
  HIDDEN_TREASURE: "Hidden treasure",
  MOVEMENT_ACTION: "+1 movement action",
  HAND_EQUIPMENT: "+1 Handheld Equipment",
  LIFE: "+1 life",

  potencialSkills: {
    Blue: [this.MOVEMENT_ACTION],
    Yellow: [this.DAMAGE, this.LIFE],
    Orange: [this.DAMAGE, this.HAND_EQUIPMENT, this.MOVEMENT_ACTION],
    Red: [this.HAND_EQUIPMENT, this.HIDDEN_TREASURE, this.LIFE, this.MOVEMENT_ACTION],
  }
}

module.exports = Skills;