const { Sobrevivente } = require('./sobrevivente.js');

adicionarEquipamento(equipamento) 
    if (this.equipamentosMaos.length < 2) {
      this.equipamentosMaos.push(equipamento);
    } else if (this.equipamentosMochila.length < 5) {
      this.equipamentosMochila.push(equipamento);
    } else {
      console.log(
        `Amigo '${this.nome}' Não é possível adicionar mais equipamentos, você já tem equipamentos nas mãos e na mochila.`
      );
    }
  
  removerEquipamentoMaos(equipamento) 
    const index = this.equipamentosMaos.indexOf(equipamento);
    if (index !== -1) {
      this.equipamentosMaos.splice(index, 1);
      console.log(`Equipamento '${equipamento}' removido das mãos de '${this.nome}'.`);
    } else {
      console.log(`Amigo '${this.nome}' Não tem nenhum equipamento '${equipamento}' nas mãos.`);
    }

    module.exports = { adicionarEquipamento, removerEquipamentoMaos }
  