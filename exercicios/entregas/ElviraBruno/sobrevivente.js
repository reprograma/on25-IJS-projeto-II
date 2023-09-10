class Sobrevivente {
    constructor(nome) {
      this.nome = nome;
      this.ferimentos = 0;
      this.acoes = 3;
      this.equipamentosMaos = [];
      this.equipamentosMochila = [];
      this.nivel = "Azul";
      this.experiencia = 0;
      this.arvoreHabilidades = [];
      this.capacidadeCarregamento = 7; // Defina a capacidade de carregamento no construtor
    
    }
}

module.exports = { Sobrevivente }