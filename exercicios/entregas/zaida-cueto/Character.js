

class Character {
  name ;
  health ;
  maxHealth;
  actions;
  level;
  experience;
  equipment;
  constructor(name, maxHealth) {
    this.name = name;
    this.health = 0;
    this.maxHealth = maxHealth;
    this.actions = 3;
    this.level = 'Blue';
    this.experience = 0;
    this.skills = [];
    this.unlockedSkills = [];
    this.equipment = {
      hands: [],
      reserve: [],
    };

    this.availableSkills = {
      Azul: ['+1 Ação'],
      Amarelo: ['+1 Dano', 'Tesouro Escondido'],
      Laranja: ['+1 Ação de Movimento', '+1 Equipamento em Mãos', '+1 Vida'],
      Vermelho: ['Habilidade 1', 'Habilidade 2', 'Habilidade 3'],
    };

  }
  performAction() {
    if (this.actions > 0) {
      this.actions -= 1;
      console.log(`${this.name} realizou uma ação.`);
    } else {
      console.log(`${this.name} não tem mais ações disponíveis.`);
    }
  }

  acquireEquipment(equipment) {
    const totalEquipments = this.equipment.hands.length + this.equipment.reserve.length;
    if (totalEquipments < 7) {
      if (this.equipment.hands.length < 2) {
        this.equipment.hands.push(equipment);
      } else {
        this.equipment.reserve.push(equipment);
      }
      console.log(`${this.name} adquiriu um equipamento: ${equipment}.`);
    } else {
      console.log(`${this.name} não pode carregar mais equipamentos.`);
    }
  }

  receiveInjury() {
    if (this.health < this.maxHealth) {
      this.health += 1; // Incrementa um ponto de vida
      console.log(`${this.name} sofreu um ferimento.`);
      if (this.health >= 3) {
        this.health = 3; // Limita a saúde a 3 pontos (máximo)
        this.die(); // Chama o método para verificar a morte
      }
    } else {
      console.log(`${this.name} já sofreu ferimentos demais.`);
    }
  }

  die() {
    if (this.health >= 3) {
      console.log(`${this.name} morreu.`);
      const game = Game.getInstance(); // Obter instância do jogo
      game.removeDeadCharacters(); // Remover personagens mortos da lista do jogo
    }
  }

  levelUp() {
    if (this.experience >= 6 && this.level === 'Azul') {
      this.level = 'Amarelo';
      console.log(`${this.name} subiu para o nível Amarelo!`);
    } else if (this.experience >= 18 && this.level === 'Amarelo') {
      this.level = 'Laranja';
      console.log(`${this.name} subiu para o nível Laranja!`);
    } else if (this.experience >= 42 && this.level === 'Laranja') {
      this.level = 'Vermelho';
      console.log(`${this.name} subiu para o nível Vermelho!`);
    }
  }
  unlockSkills() {
    switch (this.level) {
      case 'Azul':
        if (this.experience >= 6) {
          this.level = 'Amarelo';
          this.unlockedSkills.push('+1 Ação');
          console.log(`${this.name} subiu para o nível Amarelo e desbloqueou a habilidade +1 Ação.`);
        }
        break;

      case 'Amarelo':
        if (this.experience >= 18) {
          this.level = 'Laranja';
          this.unlockedSkills.push('+1 Dano', 'Tesouro Escondido');
          console.log(`${this.name} subiu para o nível Laranja e desbloqueou as habilidades +1 Dano e Tesouro Escondido.`);
        }
        break;

      case 'Laranja':
        if (this.experience >= 42) {
          this.level = 'Vermelho';
          this.unlockedSkills.push('+1 Ação de Movimento', '+1 Equipamento em Mãos', '+1 Vida');
          console.log(`${this.name} subiu para o nível Vermelho e desbloqueou as habilidades +1 Ação de Movimento, +1 Equipamento em Mãos e +1 Vida.`);
        }
        break;

      case 'Vermelho':
        if (this.experience >= 129) {
          this.unlockedSkills.push('Habilidade 1', 'Habilidade 2', 'Habilidade 3');
          console.log(`${this.name} permanece no nível Vermelho e desbloqueou as habilidades Habilidade 1, Habilidade 2 e Habilidade 3.`);
        }
        break;

      default:
        console.log(`${this.name} não subiu de nível.`);
        break;
    }
  }

}

export  default  Character;