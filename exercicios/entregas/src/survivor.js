/*
Sobreviventes
1. criar Classe Surviver
*/

class Survivor {
    name;
    injury = 0;

    constructor(name) {
        this.name = name;
        this.injury = 0;
        this.habilidades = [];
        this.acaoRestante = 3;
        this.equipamentosMaos = [];
        this.equipamentosReserva = [];
    }

    sofrerFerimento() {
        if (this.ferimentos < 3) {
            this.ferimentos++;
            if (this.ferimentos === 3) {
                console.log("Sobrevivente morreu...")
            }
        }
    }

    realizarAcao() {
        if (this.acaoRestante > 0) {
            // Implementar as ações 
            this.acaoRestante--;
        }
    }

    usarEquipamento(equipamento) {
        if (this.acaoRestante > 0) {
            if (equipamento.categoria === 'luta') {
                // Implementar a luta 
            } else if (equipamento.categoria === 'utilitario') {
                this.ferimentos--;
            }
            this.acaoRestante--;
        }
    }

    matarZumbi() {
        // Implemente a lógica para matar um zumbi
        // Depois de matar o zumbi, ganhe experiência
        this.ganharExperiencia();
    }
}

module.exports = { Survivor };