class Exp {
    experiencia = 0;
    nivel = "Azul";

    ganharExperiencia() {
        this.experiencia++;
        // Verifique se o sobrevivente atingiu os pontos necessários para subir de nível
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
}