class Bag {
  hands = [];
  inventory = [];

  addEquipment(equipment) {
    const allEquipments = this.hands.length + this.inventory.length;

    if(allEquipments === 7) {
      throw new Error("Capacidade máxima de equipamentos atingida");
    } else if(this.hands.length <= 2 && equipment.class !== "usable") {
      this.hands.push(equipment);
    } else {
      this.inventory.push(equipment);
    }
  }

  checkCapacity(injuries) {
    switch(injuries) {
      case 1:
        if(this.inventory.length === 5) {
          this.inventory.pop();
        }
        break;
      case 2:
        if(this.inventory.length === 5) {
          this.inventory.slice(3, 2);
        } else if(this.inventory.length === 4) {
          this.inventory.pop();
        }
        break;
    }
  }
}

module.exports = Bag;