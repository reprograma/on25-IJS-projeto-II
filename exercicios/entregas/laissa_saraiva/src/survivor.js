/*
Sobreviventes
1. criar Classe Surviver
*/

class Survivor {
  name;
  injury = 0;

  constructor(name) {
    this.name = name;
    this.injury = 0;
  }
}

const survivor1 = new Survivor('Laíssa');
console.log(survivor1)