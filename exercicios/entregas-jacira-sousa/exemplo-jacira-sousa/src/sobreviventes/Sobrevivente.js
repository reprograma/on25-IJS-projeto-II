const { EQUIPAMENTOS_LUTA, UTILITARIOS} = require("../equipamentos/equipamentos");

class Sobrevivente {
  nome;
  vivo = true;
  habilidades;
  nivel = "Azul";


  static nivel = [];
  static pontuacao = [];
  static ferimentos = [];
  static equipamentos = [];

  constructor(nome) {
    this.nome = nome;
    this.ferimentos = 0;
    this.pontuacao = 0;

    Sobrevivente.ferimentos.push(this);
    Sobrevivente.equipamentos.push(this);
    Sobrevivente.pontuacao.push(this);

  }

  sofrerFerimentos() {
    if (this.ferimentos === 0 || this.ferimentos < 2) {
      this.ferimentos++;
      console.log(`${this.nome} você agora tem ${this.ferimentos} ferimentos`);
    } else {
      console.log(`${this.nome} você acaba de morrer no jogo...`);
      return this.vivo = false;
    }
  }


  eliminarZumbi() {
    for (let i = 1; i < 2; i++) {
      this.pontuacao++;
      console.log(`${this.nome} você matou um zumbi e ganhou 1 ponto`);
    }
  }

  SubirNivelJogo() {
    const nivelSobrevivente = {
      Azul: 0,
      Amarelo: 6,
      Laranja: 18,
      Vermelho: 42,
    };

    for (const nivel in nivelSobrevivente) {
      if (this.pontuacao >= nivelSobrevivente[nivel]) {
        this.nivel = nivel;
      }
    }
  }
}







const sobrevivente1 = new Sobrevivente("Lulinha");
const sobrevivente2 = new Sobrevivente("Boulinhos");
const sobrevivente3 = new Sobrevivente("Haddadinho");
const sobrevivente4 = new Sobrevivente("Orlandinho");

console.log(sobrevivente1);
console.log(sobrevivente2);
console.log(sobrevivente3);
console.log(sobrevivente4);

sobrevivente1.sofrerFerimentos();
console.log(sobrevivente1);
sobrevivente3.sofrerFerimentos();
console.log(sobrevivente3);
sobrevivente2.sofrerFerimentos();
console.log(sobrevivente2);
sobrevivente4.sofrerFerimentos();
console.log(sobrevivente4);

console.log(sobrevivente1.vivo);
console.log(sobrevivente1.vivo);



sobrevivente1.eliminarZumbi();
sobrevivente1.eliminarZumbi();
sobrevivente1.eliminarZumbi();
sobrevivente1.eliminarZumbi();
sobrevivente1.eliminarZumbi();

sobrevivente1.eliminarZumbi();

sobrevivente1.SubirNivelJogo();

console.log(sobrevivente1);



module.exports = Sobrevivente;