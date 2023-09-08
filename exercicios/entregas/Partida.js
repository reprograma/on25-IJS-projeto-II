const { Registro } = require('./Registro');
const { ArvoreHabilidades } = require('./ArvoreHabilidades');
const { Sobrevivente } = require('./Sobrevivente');
const { Zumbi } = require('./Zumbi');

class Partida {
    constructor() {
        this.inicio = new Date();
        this.sobreviventes = [];
        this.arvoreHabilidades = new ArvoreHabilidades();
        this.nivelPartida = this.arvoreHabilidades.desbloquearHabilidade('Azul');
        this.finalizada = false;
        this.registro = new Registro();
    }

    addSobrevivente(sobrevivente) {
        this.sobreviventes.push(sobrevivente);
    }

    addZumbis() {
        const numZumbis = this.nivelPartida;
        for (let i = 0; i < numZumbis; i++) {
            const zumbi = new Zumbi(`Zumbi ${i + 1}`, this);
            this.addSobrevivente(zumbi);
        }
    }

    removerZumbi() {
        this.sobreviventes = this.sobreviventes.filter(sobrevivente => sobrevivente instanceof Sobrevivente);
    }

    alterarNivelPartida(novoNivel) {
        this.nivelPartida = novoNivel;
    }

    listarSobreviventes() {
        console.log('Sobreviventes na partida: ');
        for (const sobrevivente of this.sobreviventes) {
            console.log(sobrevivente.nome);
        }
    }

    finalizarPartida() {
        this.finalizada = true;
        this.fim = new Date();
    }
}

module.exports = { Partida };
