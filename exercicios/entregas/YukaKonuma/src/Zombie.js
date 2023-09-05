class Zombie {
  wound = 0;
  actions = 1;
  attackChance = {
    nivel1: 0.3,
    nivel2: 0.5,
    nivel3: 0.7,
    nivel4: 1,
  };
  lv = this.attackChance.nivel1;

  lvUP() {
    if (this.lv == 0.3) {
      this.lv = this.attackChance.nivel2;
    } else if (this.lv == 0.5) {
      this.lv = this.attackChance.nivel3;
    } else if (this.lv == 0.7) {
      this.lv = this.attackChance.nivel4;
    }
  }

  attack(survivor) {
    if (!(survivor instanceof Survivor)) {
      throw new Error(" Não é um sobrevivente ");
    }

    const roll = Number(Math.random().toFixed(1));
    if (roll <= this.lv) {
      survivor.wound++;
    }
    console.log(`Aconteceu o ataque de voce levou 1 de dano ${survivor.wound}`);
  }
}

module.exports = Zombie;
