class Sobreviventes {
    
    constructor(nome) {
        this.nome = nome;
        this.ferimentos = 0;
        this.experiencia = 0;
        this.nivel = "Azul"
    }

    sofrerFerimento() {
        this.ferimentos++

        if(this.ferimentos >= 3) {
            console.log(`${this.nome} morreu`);
            return
        }
    }

    ganharExperiencia(pontos) {
        this.experiencia += pontos;
        
        if (this.experiencia >= 6 && this.nivel === "Azul") {
            this.subirNivel();
        } else if (this.experiencia >= 18 && this.nivel === "Amarelo") {
            this.subirNivel();
        } else if (this.experiencia >= 42 && this.nivel === "Laranja") {
            this.subirNivel();
        } else if (this.experiencia >= 43 && this.nivel === "Vermelho") {
            this.subirNivel();
        }
    }

    subirNivel() {
        if (this.experiencia >= 6 && this.nivel === "Azul") {
            this.arvoreHabilidades.Amarelo.push("+1 Ação");
            this.nivel = "Amarelo";
        } else if (this.experiencia >= 18 && this.nivel === "Amarelo") {
            this.arvoreHabilidades.Laranja.push("+1 Dano");
            this.nivel = "Laranja";
        } else if (this.experiencia >= 42 && this.nivel === "Laranja") {
            this.arvoreHabilidades.Vermelho.push("Tesouro Escondido");
            this.nivel = "Vermelho";
        } else if (this.experiencia >= 43 && this.nivel === "Vermelho") {
            this.nivel = "Azul";
        }
    }

}

class Equipamentos {
    MAX_EQUIPAMENTOS;

    constructor() {
        this.MAX_EQUIPAMENTOS = 7;
        this.equipamentos = {
            luta: ['bastão de basebol', 'frigideira', 'machado', 'pistola'],
            utilitarios: ['garrafa de água', 'comida', 'kit de primeiros socorros']
        }
    }

    adquirirEquipamento(equipamento) {
        if (this.equipamentos.luta.length < 2) {
            this.equipamentos.luta.push(equipamento);
        } else if (this.equipamentos.utilitarios.length < 5) {
            this.equipamentos.utilitarios.push(equipamento);
        } else {
            console.log("Não foi possível adquirir o equipamento, pois o sobrevivente já está carregando o número máximo de equipamentos.");
        }
    }

}

class Habilidades {

    constructor(){
        this.arvoreHabilidades = {
            Amarelo: ["+1 Ação"],
            Laranja: [],
            Vermelho: []
        };
    }

    adquirirHabilidade(habilidade) {
        if (this.nivel === "Amarelo" && this.arvoreHabilidades.Amarelo.includes(habilidade)) {
            this.arvoreHabilidades.Amarelo.splice(this.arvoreHabilidades.Amarelo.indexOf(habilidade), 1);
        } else if (this.nivel === "Laranja" && this.arvoreHabilidades.Laranja.includes(habilidade)) {
            this.arvoreHabilidades.Laranja.splice(this.arvoreHabilidades.Laranja.indexOf(habilidade), 1);
        } else if (this.nivel === "Vermelho" && this.arvoreHabilidades.Vermelho.includes(habilidade)) {
            this.arvoreHabilidades.Vermelho.splice(this.arvoreHabilidades.Vermelho.indexOf(habilidade), 1);
        }
    }
}

