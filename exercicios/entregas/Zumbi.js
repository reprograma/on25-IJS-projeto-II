const { Personagem } = require('./Personagem');

class Zumbi extends Personagem {
    limiteFerimentos = 2;

    constructor(){
        super();
        this.acoesRestantes = 1;
    }

    addFerimento() {
        const sucesso = super.addFerimento();
        if (sucesso) {
            console.log(`Um zumbi foi ferido.`);
            if (!this.verificaVivo()) {
                console.log('Este zumbi morreu!');
            }
        }
    }
}

module.exports = { Zumbi }
