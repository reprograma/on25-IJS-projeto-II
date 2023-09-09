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

    avancarNivel(experiencia) {
        this.experiencia += experiencia;

        if (this.experiencia >= 43 && this.nivelAtual !== 'Amarelo') {
            this.nivelAtual = 'Amarelo';
            this.habilidadesDesbloqueadas['Amarelo'].push('+1 Ação');
        }

        if (this.experiencia >= 61 && this.nivelAtual !== 'Laranja') {
            this.nivelAtual = 'Laranja';
            this.habilidadesDesbloqueadas['Laranja'].push(this.habilidadesPotenciais['Laranja'][0]);
        }

        if (this.experiencia >= 86 && this.nivelAtual !== 'Vermelho') {
            this.nivelAtual = 'Vermelho';
            this.habilidadesDesbloqueadas['Vermelho'].push(this.habilidadesPotenciais['Vermelho'][0]);
        }
    }
}

const arvoreDeHabilidades = new ArvoreDeHabilidades();
arvoreDeHabilidades.avancarNivel(50);
console.log('Nível Atual:', arvoreDeHabilidades.nivelAtual);
console.log('Habilidades Disponíveis:', arvoreDeHabilidades.obterHabilidadesDisponiveis());
console.log('Habilidades Desbloqueadas:', arvoreDeHabilidades.obterHabilidadesDesbloqueadas());