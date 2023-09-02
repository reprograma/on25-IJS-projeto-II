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
  }

  // Método para adicionar um equipamento (mãos ou mochila) do sobrevivente
  adicionarEquipamento(equipamento) {
    if (this.equipamentosMaos.length < 2) {
      this.equipamentosMaos.push(equipamento);
    } else if (this.equipamentosMochila.length < 3) {
      this.equipamentosMochila.push(equipamento);
    } else {
      console.log(
        `Amigo '${this.nome}' Não é possível adicionar mais equipamentos, você já tem equipamentos nas mãos e na mochila.`
      );
    }
  }

      // Método para remover um equipamento das mãos do sobrevivente
      removerEquipamentoMaos(equipamento) {
        const index = this.equipamentosMaos.indexOf(equipamento);
        if (index !== -1) {
          this.equipamentosMaos.splice(index, 1);
        } else {
          console.log(`Amigo '${this.nome}' Não encontrou o equipamento nas mãos.`);
        }
      }
    
      // Método para remover um equipamento da Mochila do sobrevivente
      removerEquipamentoMochila(equipamento) {
        const index = this.equipamentosMochila.indexOf(equipamento);
        if (index !== -1) {
          this.equipamentosMochila.splice(index, 1);
        } else {
          console.log(`Amigo '${this.nome}' Não encontrou o equipamento na mochila.`);
        }
      }
  

  // Método para lidar com ferimentos
  ferir(dano) {
    if (this.ferimentos < 3) {
      this.ferimentos += dano;
      const equipamentosPerdidos = this.ferimentos; // Quantidade de equipamentos perdidos
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
  }
}
// Exemplo de uso da classe Sobrevivente
const sobrevivente1 = new Sobrevivente("Soldado Ryan");

sobrevivente1.ferir(1); // Causa 1 ferimento
//sobrevivente1.ferir(1); // Causa 1 ferimento
//sobrevivente1.ferir(1); // Causa 1 ferimento, o sobrevivente morre

console.log(
  `Ferimentos de '${sobrevivente1.nome}': ${sobrevivente1.ferimentos}`
);
sobrevivente1.adicionarEquipamento("bastão de baseball"); // Adiciona à mão
sobrevivente1.adicionarEquipamento("frigideira"); // Adiciona à mão
sobrevivente1.adicionarEquipamento("kit de primeiros socorros"); // Adiciona à mochila
sobrevivente1.adicionarEquipamento("Garrafa de água"); // Adiciona à mochila

console.log(`Equipamentos nas mãos de '${sobrevivente1.nome}': ${sobrevivente1.equipamentosMaos}`);
sobrevivente1.removerEquipamentoMaos("frigideira"); // Remove um equipamento das mãos

console.log(`Equipamentos nas mãos de '${sobrevivente1.nome}' após remover: ${sobrevivente1.equipamentosMaos}`);

console.log(`Equipamentos nas mãos de '${sobrevivente1.nome}': ${sobrevivente1.equipamentosMaos}`); // Exibe os equipamentos nas mãos
console.log(`Equipamentos na mochila de '${sobrevivente1.nome}': ${sobrevivente1.equipamentosMochila}`); // Exibe os equipamentos na mochila

