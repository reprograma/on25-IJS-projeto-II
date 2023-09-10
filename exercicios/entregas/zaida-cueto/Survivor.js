import { Character } from "./Character";
 
 class Survivor extends Character {
  equipment;
  actionsPerTurn;
  constructor(name) {
    super(name);
    this.equipment = {
      hands: [], 
      reserve: [], 
    };
    this.actionsPerTurn = 3; 
  }


  equip(item) {
    if (this.equipment.hands.length + this.equipment.reserve.length < 7) {
      if (this.equipment.hands.length < 2) {
        this.equipment.hands.push(item);
        console.log(`${this.name} equipou ${item} nas mãos.`);
      } else {      
          this.equipment.reserve.push(item);
        console.log(`${this.name} equipou ${item} na reserva.`);
      }
    } else {
      console.log(`${this.name} não pode equipar mais itens, pois atingiu a capacidade máxima.`);
    }
  }

  useItem(item) {
    const { hands, reserve } = this.equipment;

    // Verifica se o item está nas mãos
    const handsIndex = hands.indexOf(item);
    if (handsIndex !== -1) {
      if (item === "kit de primeiros socorros") {
        // Se o item for um kit de primeiros socorros, cura o personagem
        this.heal();
        console.log(`${this.name} usou um kit de primeiros socorros e se curou.`);
        
        // Remove o kit de primeiros socorros das mãos
        hands.splice(handsIndex, 1);
      } else {
        console.log(`${this.name} não pode usar ${item}.`);
      }
    } else {
      console.log(`${this.name} não está segurando ${item}.`);
    }
  }


  heal() {
    this.injuries--; 
    if (this.injuries < 0) {
      this.injuries = 0; 
    }
  }

  lemente a lógica de subida de nível conforme as regras do jogo
  }








