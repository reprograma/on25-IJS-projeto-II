class nivel {
    constructor() {
        this.pontos = 0;
        this.nivel = 0;
    }

    ganharExperiencia(pontos) {
        this.experiencia += pontos;
        if (this.experiencia >= 42 && this.nivel !== "Vermelho") {
            this.nivel = "Vermelho";
            return `${this.nome} subiu para o nível Vermelho!`;
        } else if (this.experiencia >= 18 && this.nivel !== "Laranja") {
            this.nivel = "Laranja";
            return `${this.nome} subiu para o nível Laranja!`;
        } else if (this.experiencia >= 6 && this.nivel !== "Amarelo") {
            this.nivel = "Amarelo";
            return `${this.nome} subiu para o nível Amarelo!`;
        }
    }

}
