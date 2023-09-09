const NIVEL = require('../nivel/nivel');

class Sobrevivente {
    nome;
    nivel;
    ferimentos;
    habilidades;
    equipamento;
    equipamentosMaos;
    equipamentosMochila;
    experiencia;

    quantidadeItemDesequiparFerido = 1;

    constructor(nome) {
        this.nome = nome;
        this.experiencia = 0;
        this.nivel = Nivel.niveis[1];
        this.ferimentos = 0;
        this.habilidades = [];
        this.equipamento = new Equipamento();
      
    }

    subirNivel() {
       //to do
    }   
    
    verificaSobreviventeVivo() {
        if(this.ferimentos >= 3) {
            return false;
        } else {
            return true;
        }
    }

    receberFerimento() {
        if(!verificaSobreviventeVivo()) {
           console.log("Sobrevivente não sobreviveu.");
           return;
        } else {
            this.ferimentos =+ 1;
            this.equipamento.desequipar(quantidadeItemDesequiparFerido);
        }
    }

    ferirZumbi() {
        this.experiencia = this.experiencia + 1;
        this.verificarNivel();
    }

    verificarNivel() {
        if(this.experiencia < 6) {
            this.nivel = Nivel.niveis[1];
        } else if (this.experiencia < 18) {
            this.nivel = Nivel.niveis[2];
        } else if (this.experiencia < 45) {
            this.nivel = Nivel.niveis[3];
        } else {
            this.nivel = Nivel.niveis[4];
        }
    }
}

exports.module(Sobrevivente);

