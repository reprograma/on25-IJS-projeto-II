const { Survivor } = require("../Survivor/Survivor");
const {Equipments} = require("../Equipments/Equipments");
const { Levels } = require("../Levels/Levels");
const {SkillsTree} = require("../SkillsTree/SkillsTree");

class Game {
  players = [];

  addSurvivor(name) {
    const newSurvivor = new Survivor(name);
    this.players.push(newSurvivor);
    return `Welcome to the game, ${newSurvivor.name}.`
  }

  killAZombie() {
    // Método estático - falta passsar para dinâmico
    const player = this.players[0];
    player.level.experience++;
  }

  getHurt() {
        // Método estático - falta passsar para dinâmico
    let playerInjury = this.players[0].injury;
    const playerName = this.players[0].name;
    const max0fInjuries = this.players[0].MAX_OF_INJURIES;

    if (playerInjury === max0fInjuries) {
      return `${playerName}, você perdeu!`;
    } else {
      this.players[0].addInjury();
      return `${playerName}, você foi atingido(a) pela ${playerInjury}ª vez.`;
    }
  }
}

module.exports = {Game};