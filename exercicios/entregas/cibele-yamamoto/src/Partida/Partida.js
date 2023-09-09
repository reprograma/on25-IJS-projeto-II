const Sobrevivente = require('../Sobrevivente/Sobrevivente');
const Zumbi = require('../Zumbi/Zumbi');

class Partida {
    sobreviventes; // array com os sobreviventes da partida
    nivelDificuldade; // nível de dificuldade da partida
    zumbis; // array com zumbis da partida

    static registros =[]

    constructor(sobreviventes) {
        if(this.validarSobreviventes(sobreviventes)) {
            this.sobreviventes = sobreviventes;
            this.nivelDificuldade = this.calcNivelDificuldade(sobreviventes);
            this.zumbis = this.criarZumbis(sobreviventes);
            
        } else {
            console.log("Não foi possível iniciar a partida. Sobreviventes inválidos!")
        }

    }

    validarSobreviventes(sobreviventes) {
        //===> Cada partida inclui no **mínimo 1 sobrevivente;**
        if(Array.isArray(sobreviventes)) {
            let sobreviventesValidos = true;
            sobreviventes.forEach( sobrevivente => {
                if(!(sobrevivente instanceof Sobrevivente)) {
                    console.log(sobrevivente + " não é uma instância de Sobrevivente")
                    sobreviventesValidos=false;
                }                
            })
            return sobreviventesValidos;
        } else {
            return false;
        }
    }

    calcNivelDificuldade(sobreviventes) {
        let maiorNivel=0;

        sobreviventes.forEach(sobrevivente => {
            if(sobrevivente.nivel.nivel > maiorNivel) {
                maiorNivel = sobrevivente.nivel.nivel;
            }
        })
        return maiorNivel;
    }

    criarZumbis(sobreviventes) {
        // ===> Cada partida inicia com 2 zumbis para cada sobrevivente existente no jogo.
        let qtdZumbis = len(sobreviventes)*2;
        console.log("Temos " + qtdZumbis + "!");
        for(let i=0; i<qtdZumbis; i++) {
            this.criarZumbis()
        }
    }

    criarZumbi() {
        const novoZumbi = new Zumbi('zumbi' + len(len(this.zumbis)));
        this.zumbis.push(novoZumbi);
    }

    adicionarSobreviente(Sobrevivente) {
        // ===>Novos sobreviventes podem ser adicionados a qualquer momento da partida. 
    }

    adicionarRegistro(registro) {
        /*
        ===> registros
            O jogo inclui um histórico contínuo de eventos que ocorreram à medida que foi jogado. 
                Registros relevantes:
                - A hora em que a partida começou;
                - Novo sobrevivente adicionado à partida;
                - Sobrevivente adquire um Equipamento.
                - Sobrevivente sofre um ferido.
                - Sobrevivente morre.
                - Sobe de nível.
                - O nível do partida muda.
                - Partida finalizada.
                - Um sobrevivente adquire uma nova habilidade.
        */
    }

    validarFimPartida(sobrevivente) {
        //===> **O JOGO PODE ACABAR QUANDO UM SOBREVIVENTE CHEGA NO 150**
        if(sobrevivente.xp >= 150) {
            console.log("Fim da partida!");
            console.log(sobrevivente.nome + " ganhou a partida com " + sobrevivente.xp + " de XP!")
            return true;
        }
    }

}

module.exports = Partida;

/*
===>Caso todos os sobreviventes morram, a partida será terminada.
===> If ferimento + 1, capacidade carregar equip sobrevivente -1
===> Cada vez que o sobrevivente **mata um zumbi, ele ganha 1 ponto de experiência**

===> Cada zumbi pode realizar 1 ação por turno.
===>A cada rodada são adicionados novos zumbis de acordo com o nível do jogo.
*/