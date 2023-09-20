const { Equipamentos } = require('./Equipamentos');

class Sobrevivente {
    static niveis = ['Azul', 'Amarelo', 'Laranja', 'Vermelho'];

    constructor(nome) {
        this.nome = nome;
        this.ferimentos = 0;
        this.xp = 0;
        this.nivel = Sobrevivente.niveis[0];
        this.equipamentos = new Equipamentos();
        this.equipamento_mao = [];
        this.equipamento_mochila = [];
        this.habilidades = [];
    }

    addEquipamentos(equipamento) {
        if (equipamento instanceof Equipamentos) {
            this.equipamentos = equipamento;
        } else {
            console.log('Não é um equipamento');
        }
    }

    addEquipamentosMao(atributoEquipamento) {
        if (this.equipamento_mao.length < 2 && !this.equipamento_mao.includes(atributoEquipamento)) {
            this.equipamento_mao.push(atributoEquipamento);
            console.log('Equipamento adicionado na mão');
        } else {
            console.log('Equipamento já adicionado na mão ou mão cheia');
        }
    }

    addEquipamentosMochila(atributoEquipamento) {
        if (this.equipamento_mochila.length < 5 && !this.equipamento_mochila.includes(atributoEquipamento)) {
            this.equipamento_mochila.push(atributoEquipamento);
            console.log('Equipamento adicionado na mochila');
        } else {
            console.log('Mochila cheia ou equipamento já adicionado');
        }
    }

    removeEquipamentosMao(atributoEquipamento) {
        const index = this.equipamento_mao.indexOf(atributoEquipamento);
        if (index !== -1) {
            this.equipamento_mao.splice(index, 1);
            console.log('Equipamento removido da mão');
        } else {
            console.log('Equipamento não encontrado na mão');
        }
    }

    removeEquipamentosMochila(atributoEquipamento) {
        const index = this.equipamento_mochila.indexOf(atributoEquipamento);
        if (index !== -1) {
            this.equipamento_mochila.splice(index, 1);
            console.log('Equipamento removido da mochila');
        } else {
            console.log('Equipamento não encontrado na mochila');
        }
    }

    addXP() {
        this.xp += 1;
        if (this.xp >= 6 && this.xp < 18) {
            this.nivel = Sobrevivente.niveis[1];
        } else if (this.xp >= 18 && this.xp < 42) {
            this.nivel = Sobrevivente.niveis[2];
        } else if (this.xp >= 42) {
            this.nivel = Sobrevivente.niveis[3];
        }
    }

    addFerimentos() {
        this.ferimentos += 1;
        if (this.ferimentos >= 3) {
            console.log(`${this.nome} morreu!`);
        }
    }

    curarFerimentos() {
        if (this.ferimentos > 0) {
            this.ferimentos -= 1;
            console.log(`${this.nome} foi curado e agora tem ${this.ferimentos} ferimentos.`);
        } else {
            console.log(`${this.nome} não tem ferimentos para curar.`);
        }
    }

    atacar() {
        if (this.equipamento_mao.length > 0) {
            console.log(`${this.nome} está atacando com ${this.equipamento_mao[0]}`);
        } else {
            console.log(`${this.nome} está atacando com as mãos.`);
        }
    }

    habilitadesPotenciais() {
        if (this.nivel === Sobrevivente.niveis[1]) {
            this.habilidades.push('+1 Ação');
        } else if (this.nivel === Sobrevivente.niveis[2]) {
            this.habilidades.push('Tesouro escondido', '+1 Ação de Movimento');
        } else if (this.nivel === Sobrevivente.niveis[3]) {
            this.habilidades.push('+1 Dano', '+1 equipamento em mãos', '+1 vida');
        }
    }
}

// Teste
const sobrevivente = new Sobrevivente('Carla');
console.log(sobrevivente.nome); // Carla
equip = new Equipamentos('baseball', 'frigideira', null, null, null, null, null);
console.log(equip);
sobrevivente.addEquipamentos(equip);
sobrevivente.addEquipamentosMao('bastao_baseball');
sobrevivente.addEquipamentosMochila('comida');
console.log(sobrevivente.equipamentos)
sobrevivente.addXP();
sobrevivente.addFerimentos();
sobrevivente.curarFerimentos();
sobrevivente.atacar();
sobrevivente.habilitadesPotenciais();
console.log(sobrevivente.habilidades);
