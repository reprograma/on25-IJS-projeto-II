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

  adicionarEquipamento(equipamento) {
    if (this.equipamentosMaos.length < 2) {
      this.equipamentosMaos.push(equipamento);
    } else if (this.equipamentosMochila.length < 5) {
      this.equipamentosMochila.push(equipamento);
    } else {
      console.log(
        `Amigo '${this.nome}' Não é possível adicionar mais equipamentos, você já tem equipamentos nas mãos e na mochila.`
      );
    }
  }

removerEquipamentoMaos(equipamento) {
  const index = this.equipamentosMaos.indexOf(equipamento);
  if (index !== -1) {
    this.equipamentosMaos.splice(index, 1);
    console.log(`Equipamento '${equipamento}' removido das mãos de '${this.nome}'.`);
    console.log(`Equipamentos nas mãos de '${sobrevivente1.nome}' após remover: ${equipamento}`);

  } else {
    console.log(`Amigo '${this.nome}' Não encontrou o equipamento '${equipamento}' nas mãos.`);
  }
}

    
/*      removerEquipamentoMochila(equipamento) {
        const index = this.equipamentosMochila.indexOf(equipamento);
        if (index !== -1) {
          this.equipamentosMochila.splice(index, 1);
        } else {
          console.log(`Amigo '${this.nome}' Não encontrou o equipamento na mochila.`);
        }
      }
  */

  ferir(dano) {
    if (this.ferimentos < 3) {
      this.ferimentos += dano;
      const equipamentosPerdidos = this.ferimentos; 
      this.capacidadeCarregamento = this.equipamentosMaos.length + this.equipamentosMochila.length - equipamentosPerdidos;

      if (this.capacidadeCarregamento < 0) {
        console.log(`Escolha um equipamento para ser excluído '${this.nome}'`);
      }

      if (this.ferimentos >= 3) {
        console.log(`Amigo '${this.nome}' agora vc é um ZUMBI.`);
      }
    } else {
      console.log(`Amigo '${this.nome}' já foi morto e não pode ser ferido novamente.`);
    }
  }
  adicionarExperiencia(pontos) {
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
    }

  // Método para subir de nível
  subirDeNivel(novoNivel) {
    console.log(`Parabéns, '${this.nome}' subiu para o nível ${novoNivel}!?`);
    this.nivel = novoNivel;
    this.experiencia = 0; // Reseta a experiência após subir de nível
  }
}

// Exemplo de uso
const sobrevivente11 = new Sobrevivente("Negan");
//sobrevivente11.adicionarExperiencia(5); // Adiciona 5 pontos de experiência (Azul)
sobrevivente11.adicionarExperiencia(12); // Adiciona 12 pontos de experiência (Amarelo)
//sobrevivente11.adicionarExperiencia(24); // Adiciona 24 pontos de experiência (Laranja)
//sobrevivente11.adicionarExperiencia(100); // Adiciona 100 pontos de experiência (Parabéns)










//sobrevivente1.ferir(1); // Causa 1 ferimento
//sobrevivente1.ferir(1); // Causa 1 ferimento
//sobrevivente1.ferir(1); // Causa 1 ferimento, o sobrevivente morre

//console.log(
//  `Ferimentos de '${sobrevivente1.nome}': ${sobrevivente1.ferimentos}`
//);
/*sobrevivente1.adicionarEquipamento("frigideira"); // Adiciona à mão
sobrevivente1.adicionarEquipamento("bastão de baseball"); // Adiciona à mão

sobrevivente1.adicionarEquipamento("kit de primeiros socorros"); // Adiciona à mochila
sobrevivente1.adicionarEquipamento("Garrafa de água"); // Adiciona à mochila
sobrevivente1.adicionarEquipamento("Machadinha"); // Adiciona à mochila
sobrevivente1.adicionarEquipamento("Corda"); // Adiciona à mochilasobrevivente1.adicionarEquipamento("kit de primeiros socorros"); // Adiciona à mochila
sobrevivente1.adicionarEquipamento("Pederneira"); // Adiciona à mochila


console.log(`Equipamentos nas mãos de '${sobrevivente1.nome}': ${sobrevivente1.equipamentosMaos}`);
sobrevivente1.removerEquipamentoMaos("frigideira"); // Remove um equipamento das mãos


console.log(`Equipamentos nas mãos de '${sobrevivente1.nome}': ${sobrevivente1.equipamentosMaos}`); // Exibe os equipamentos nas mãos
console.log(`Equipamentos na mochila de '${sobrevivente1.nome}': ${sobrevivente1.equipamentosMochila}`); // Exibe os equipamentos na mochila

*/