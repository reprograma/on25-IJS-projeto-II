class Equipments {
  #MAX_OF_EQUIPMENTS = 7;
  resources;

  constructor() {
    this.resources = {
      fightingItems: ["bastão de baseball", "frigideira", "machado", "pistola"],
      utilitiesItems: ["garrafa de água", "comida", "kit de primeiros socorros"]
    };
  }

  get maxOfEquipments() {
    return this.#MAX_OF_EQUIPMENTS;
  }

  set maxOfEquipments(newQuantity) {
    this.#MAX_OF_EQUIPMENTS = newQuantity;
  }
}

module.exports = { Equipments };
