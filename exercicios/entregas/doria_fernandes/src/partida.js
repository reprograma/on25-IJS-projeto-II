class Match {
    constructor() {
        this.sobreviventes = [];
        this.nivelPartida = 1; 
    }

    adicionarSobrevivente(sobrevivente) {
        this.sobreviventes.push(sobrevivente);
    }

    atualizarNivelPartida() {
        let nivelMaisAlto = "Azul";
        for (const sobrevivente of this.sobreviventes) {
            if (sobrevivente.nivel === "Vermelho") {
                nivelMaisAlto = "Vermelho";
                break;
            } else if (sobrevivente.nivel === "Laranja") {
                nivelMaisAlto = "Laranja";
            } else if (sobrevivente.nivel === "Amarelo" && nivelMaisAlto !== "Laranja") {
                nivelMaisAlto = "Amarelo";
            }
        }
        this.nivelPartida = nivelMaisAlto;
    }
}