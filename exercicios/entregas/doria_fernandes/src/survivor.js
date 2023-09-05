/*
Sobreviventes
1. criar Classe Surviver
*/

class Survivor {

    constructor(nome) {
        this.nome = nome;
        this.ferimentos = 0;
        this.acoesPorTurno = 3;
        this.equipamentos = {
            maos: [],
            reserva: []
        };
        this.experiencia = 0;
        this.nivel = 'Azul';
    }

    sofrerFerimento() {
        if (this.ferimentos < 3) {
            this.ferimentos++;
            // deve diminuir a quantidade de equipamentos, implementar
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

    ganharExperiencia() {
        this.experiencia++;
        if (this.experiencia >= 6 && this.nivel === "Azul") {
            this.nivel = "Amarelo";
        }
        if (this.experiencia >= 18 && this.nivel === "Amarelo") {
            this.nivel = "Laranja";
        }
        if (this.experiencia >= 42 && this.nivel === "Laranja") {
            this.nivel = "Vermelho";
        }
    }

    matarZumbi() {
        // Implemente a lógica para matar um zumbi
        // Depois de matar o zumbi, ganhe experiência
        this.ganharExperiencia();
    }
}

module.exports = { Survivor };