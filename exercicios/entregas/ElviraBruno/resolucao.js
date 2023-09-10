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
    } else {
      console.log(`Amigo '${this.nome}' Não tem nenhum equipamento '${equipamento}' nas mãos.`);
    }
  }

  ferir(dano) {
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

  subirDeNivel(novoNivel) {
    console.log(`Parabéns, '${this.nome}' subiu para o nível ${novoNivel}!`);
    this.nivel = novoNivel;
    this.experiencia = 0; // Reseta a experiência após subir de nível
  }
}

