const { Personagem } = require('./Personagem');
const { Equipamentos } = require('./Equipamentos');
const { ArvoreHabilidades } = require('./ArvoreHabilidades');

class Sobrevivente extends Personagem {
    limiteFerimentos = 3;

    constructor(nome) {
        super();
        this.nome = nome;
        this.habilidades = [];
        this.acoesRestantes = 3;
        this.equipamentos = new Equipamentos();
        this.arvoreHabilidades = new ArvoreHabilidades();
        this.nivel = this.arvoreHabilidades.desbloquearHabilidade('Azul');
        this.experiencia = 0;
    }

    addFerimento(){
        if (!this.verificaVivo()) {
            console.log(`${this.nome} está morto e não pode ser ferido novamente.`);
            return false;
        }

        super.addFerimento();

        console.log(`Ops, ${this.nome} foi ferido e tem ${this.ferimentos}/${this.limiteFerimentos} ferimentos.`);

        if (!this.verificaFerimentos()) {
            console.log(`Após esse ataque, ${this.nome} morreu!`);
            this.vivo = false;
            return false;
        }

        return true
    }

    chanceDeAtaque() {
        switch (this.nivel) {
            case 'Azul':
                return 0.3;
            case 'Amarelo':
                return 0.5;
            case 'Laranja':
                return 0.7;
            case 'Vermelho':
                return 1.0;
            default:
                return 0;
        }
    }

    realizarAcao() {
        if (this.acoesRestantes > 0 && this.verificaVivo()) {
            console.log(`${this.nome} realizou uma ação.`);
            this.acoesRestantes -= 1;
    
            const calculoAtaque = this.chanceDeAtaque();
            if (Math.random() < calculoAtaque) {
                console.log(`${this.nome} atacou e derrotou um zumbi.`);
                this.ganharExperiencia(1);
                this.partida.removerZumbi();
            } else {
                console.log('O ataque deu errado.');
            }
    
        } else {
            console.log(`${this.nome} não pode realizar mais ações.`);
            return false;
        }
    }

    addHabilidade(habilidade){
        const limiteHabilidadesPorNivel = {
            'Amarelo': 1,
            'Laranja': 2,
            'Vermelho': 3
        };
    
        if (this.nivel in limiteHabilidadesPorNivel) {
            const limite = limiteHabilidadesPorNivel[this.nivel];
            if (this.habilidades.length < limite) {
                this.habilidades.push(habilidade);
                console.log(`${this.nome} adquiriu a habilidade: ${habilidade}.`);
            } else {
                console.log(`${this.nome} não pode adquirir mais habilidades neste nível.`);
            }
        } else {
            console.log(`${this.nome} não pode adquirir habilidades neste nível.`);
        }
    }

    ganharExperiencia(pontos) {
        this.experiencia += pontos;
        console.log(`${this.nome} ganhou ${pontos} pontos de experiência. Total: ${this.experiencia}`);

        const niveisRequisitos = {
            'Azul': { limite: 6, habilidade: "+1 Ação de Movimento" },
            'Amarelo': { limite: 18, habilidade: "+1 de Dano" },
            'Laranja': { limite: 42, habilidade: "Tesouro Oculto" }
        };

        for (const nivel in niveisRequisitos) {
            const requisitos = niveisRequisitos[nivel];
            if (this.experiencia >= requisitos.limite && this.nivel === nivel) {
                this.nivel = Sobrevivente.niveisDisponiveis[nivel];
                console.log(`${this.nome} avançou para o nível ${this.nivel}.`);
                if (requisitos.habilidade) {
                    this.addHabilidade(requisitos.habilidade);
                }
                break;
            }
        }
    }
}

module.exports = { Sobrevivente }