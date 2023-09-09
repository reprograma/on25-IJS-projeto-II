const { Equipamento} = require('./equipamento');
const { Nivel} = require('./experiencia');
class Sobrevivente {
  constructor (nome) {
        this.nome = nome;
        this.ferimento = 0;
        this.capacidadeEquipamentos = 7;
        this.experiencia = 0;
        this.nivel = "Azul";
        this.acoesPorTurno = 3;
        this.equipamentos = {
                maos: [],
                reserva: []
                };
    }


    realizarAcao() {
        if (this.ferimentos >= 3) {
            return `${this.nome} morreu!`;
        } else if (this.acoesPorTurno > 0) {
            this.acoesPorTurno--;
            const acao = Math.floor(Math.random() * 3); // Simulando ações aleatórias
            if (acao === 0) {
                this.ferimentos++;
                return `${this.nome} sofreu um ferimento!`;
            } else {
                return `${this.nome} realizou uma ação sem consequências.`;
            }
        } else {
            return `${this.nome} está sem ações para este turno.`;
        }
    }
}