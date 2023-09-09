const Sobrevivente = require('../Sobrevivente/Sobrevivente');
const Partida = require('./Partida');

/*
    const player1 = new Sobrevivente("player1");
    const player2 = new Sobrevivente("player2");
    const player3 = new Sobrevivente("player3");
    const player4 = new Sobrevivente("player4");
*/

describe("Testar classe Partidao", () => {
    test("Se a partida rejeita sobreviventes invalidos", () => {
        const partida1 = new Partida("sobreviventes");
        expect(partida1.sobreviventes).toBe(undefined);
    })
})

/*
class Partida {
    sobreviventes; // array com os sobreviventes da partida
    nivelDificuldade; // nível de dificuldade da partida

    static registros =[]

    constructor(sobreviventes) {
        if(this.validarSobreviventes(sobreviventes)) {
            this.sobreviventes = sobreviventes;
            this.nivelDificuldade = this.calcNivelDificuldade(sobreviventes);
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

    adicionarSobreviente(Sobrevivente) {
        // ===>Novos sobreviventes podem ser adicionados a qualquer momento da partida. 
    }

    adicionarRegistro(registro) {
        
    }

    validarFimPartida(sobrevivente) {
        //===> **O JOGO PODE ACABAR QUANDO UM SOBREVIVENTE CHEGA NO 150**
        if(sobrevivente.xp >= 150) {
            console.log("Fim da partida!");
            console.log(sobrevivente.nome + " ganhou a partida com " + sobrevivente.xp + " de XP!")
        }
    }

}

export default Partida;
*/
