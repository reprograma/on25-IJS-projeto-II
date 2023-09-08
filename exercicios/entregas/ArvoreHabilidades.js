class ArvoreHabilidades {
    constructor() {
        this.habilidadesPotenciais = {
            Azul: ["+1 ação de movimento"],
            Amarelo: ["+1 de dano"],
            Laranja: ["+1 Equipamento de Mão", "+1 ação de movimento"],
            Vermelho: ["+1 Equipamento de Mão", "Tesouro oculto"]
        };

        this.habilidadesDesbloqueadas = [];
    }

    desbloquearHabilidade(nivel) {
        const habilidadesPotenciais = this.habilidadesPotenciais[nivel];

        if (habilidadesPotenciais && habilidadesPotenciais.length > 0) {
            const habilidade = habilidadesPotenciais.shift();
            this.habilidadesDesbloqueadas.push(habilidade);

            return habilidade;
        }

        return null;
    }

    listarHabilidadesDesbloqueadas() {
        return this.habilidadesDesbloqueadas;
    }

    listarHabilidadesPotenciais(nivel) {
        return this.habilidadesPotenciais[nivel];
    }
}

module.exports = { ArvoreHabilidades };
