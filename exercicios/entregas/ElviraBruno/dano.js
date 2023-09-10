const { Sobrevivente } = require('./sobrevivente.js');
const { equipamento } = require('./equipamento.js');
const { experiencia } = require('./experiencia.js');

ferir(dano) 
    if (this.ferimentos < 3) {
      this.ferimentos += dano;
      const equipamentosPerdidos = this.ferimentos;
      this.capacidadeCarregamento = this.equipamentosMaos.length + this.equipamentosMochila.length - equipamentosPerdidos;

      if (this.capacidadeCarregamento < 0) {
        console.log(`Escolha um equipamento para ser excluído '${this.nome}'`);
      }

      if (this.ferimentos >= 3) {
        console.log(`Amigo '${this.nome}' foi morto.`);
      }
    } else {
      console.log(`Amigo '${this.nome}' já foi morto e não pode ser ferido novamente.`);
    }
module.exports = { ferir }