class Personagem {
    #ferimentos;
    #vivo;
    limiteFerimentos;

    constructor() {
        this.#ferimentos = 0;
        this.#vivo = true;
        this.acoesRestantes;
    }

    get ferimentos() {
        return this.#ferimentos;
    }

    get vivo() {
        return this.#vivo;
    }

    verificaVivo() {
        return this.#vivo === true;
    }

    verificaFerimentos() {
        return this.#ferimentos < this.limiteFerimentos;
    }

    addFerimento() {
        if (!this.verificaVivo()) {
            return false;
        }

        this.#ferimentos += 1;

        if (this.#ferimentos >= this.limiteFerimentos) {
            this.#vivo = false;
        }

        return true;
    }

    realizarAcao() {
        if (this.acoesRestantes > 0 && this.verificaVivo()) {
            console.log(`Ação realizada.`);
            this.acoesRestantes -= 1;
        } else {
            return false;
        }
    }
}

module.exports = { Personagem }
