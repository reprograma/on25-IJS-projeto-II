/*
Sobreviventes
1. criar Classe Surviver
*/

class Survivor {
  name;
  injury = 0;
  #MAX_OF_INJURIES = 3
  #ACTIONS = 3;

  constructor(name) {
    this.name = name;
  }

  get action() {
    return this.#ACTIONS;
  }

  getHurt() {
    if (this.injury === this.#MAX_OF_INJURIES) {
      return `${this.name}, você perdeu!`;
    } else {
      this.injury++;
      return `${this.name}, você foi atingido(a) pela ${this.injury}ª vez.`;
    }
  }
}

module.exports = {Survivor};