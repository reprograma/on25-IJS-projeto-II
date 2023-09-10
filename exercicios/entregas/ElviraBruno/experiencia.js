const { Sobrevivente } = require('./sobrevivente.js');
const { equipamento } = require('./equipamento.js');

adicionarExperiencia(pontos) 
    this.experiencia += pontos;

    if (this.experiencia >= 0 && this.experiencia < 7) {
      this.subirDeNivel("Azul");
    } else if (this.experiencia >= 7 && this.experiencia < 19) {
      this.subirDeNivel("Amarelo");
    } else if (this.experiencia >= 19 && this.experiencia < 43) {
      this.subirDeNivel("Laranja");
    } else if (this.experiencia >= 43 && this.experiencia < 129) {
      this.subirDeNivel("Vermelho");
    } else if (this.experiencia >= 129) {
      this.subirDeNivel("Parabéns, você salvou a humanidade e exterminou os Zumbis");
    }
  

  subirDeNivel(novoNivel) 
    console.log(`Parabéns, '${this.nome}' subiu para o nível ${novoNivel}!`);
    this.nivel = novoNivel;
    this.experiencia = 0; // Reseta a experiência após subir de nível
  
module.exports = { adicionarExperiencia, subirDeNivel }