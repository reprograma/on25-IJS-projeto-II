const { Game } = require("./Game.js");

class Survivor {
  constructor(name) {
    this.name = name;
    this.health = 0;
    this.maxHealth = 3;
    this.actions = 3;
    this.equipment = [];
    this.experience = 0;
    this.level = "Azul";
    this.skillTree = {
      Azul: [],
      Amarelo: ["+1 Ação"],
      Laranja: [],
      Vermelho: [],
    };
  }

  takeDamage(damage) {
    if (this.health < this.maxHealth) {
      this.health += damage;
      if (this.health >= this.maxHealth) {
        this.die();
      }
    }
  }

  die() {
    // código
  }

  levelUp() {
    if (this.experience >= 6) {
      this.level = "Amarelo";
      this.actions += 1;
      this.experience -= 6;
      this.unlockSkill("+1 Ação");
    } else if (this.experience >= 18) {
      this.level = "Laranja";
      this.experience -= 18;
    } else if (this.experience >= 42) {
      this.level = "Vermelho";
      this.experience -= 42;
    }
  }

  unlockSkill(skill) {
    if (this.level !== "Azul") {
      this.skillTree[this.level].push(skill);
    }
  }

  acquireEquipment(item) {
    if (this.equipment.length < this.maxEquipmentCapacity()) {
      this.equipment.push(item);
    } else {
      // Handle equipment capacity exceeded
    }
  }

  maxEquipmentCapacity() {
    return 2 + Math.max(0, this.health - 3);
  }
}

module.exports = { Survivor };

// Exemplo de uso:

const game = new Game();
const survivor1 = new Survivor("John");
const survivor2 = new Survivor("Alice");

game.addSurvivor(survivor1);
game.addSurvivor(survivor2);

// Simulação de eventos do jogo

survivor1.takeDamage(1);
survivor1.takeDamage(1);
survivor1.takeDamage(1);
survivor1.levelUp();

survivor2.acquireEquipment("bastão de baseball");

game.updateDifficulty();

console.log(game);
console.log(survivor1);
console.log(survivor2);
