class Sobrevivente {
    nome;
    nivel;
    xp;
    ferimentos;
    acoesPorTurno;
    qtdArvoreHabilidades;
    equipMaxMaos;
    equipMaxReserva;
    equipMaos;
    equipReserva;

    static habilidades = ["+1 Dano" , "+1 Equip-Geral", "+1 Mov", "+1 Equip-Maos", "+1 Vidas"];
    static niveis = [
        {
            "nivel": 1,
            "nome": "Azul",
            "xpInicial": 0,
            "xpFinal": 5,
            "qtdHabilidadePotencial": 0,
            "habilidades": []
        },
        {
            "nivel": 2,
            "nome": "Amarelo",
            "xpInicial": 6,
            "xpFinal": 17,
            "qtdHabilidadePotencial": 1,
            "habilidades": ["+1 Acao"]
        },
        {
            "nivel": 3,
            "nome": "Laranja",
            "xpInicial": 18,
            "xpFinal": 41,
            "qtdHabilidadePotencial": 2,
            "habilidades": this.habilidades
        },
        {
            "nivel": 4,
            "nome": "Vermelho",
            "xpInicial": 42,
            "xpFinal": 150,
            "qtdHabilidadePotencial": 3,
            "habilidades": this.habilidades
        }    
    ]


    constructor(nome) {
        this.nome = nome;
        this.nivel = this.constructor.niveis[0];
        this.xp = 0;
        this.ferimentos = 0;
        this.acoesPorTurno = 3;
        this.qtdArvoreHabilidades = 1;
        this.equipMaxMaos = 2;
        this.equipMaxReserva = 5;
        this.equipMaos = [];
        this.equipReserva = [];
    }

    adicionarEquipamento(equipamento, local) {
        // fazer validacoes de limite de equipamentos
        if(local=="mao") {
            this.equipMaos.push(equipamento);
        } else if (local=="reserva") {
            this.equipReserva.push(equipamento);
        } else {
            console.log("Opção de local inválida!")
        }
    }

}

module.exports = Sobrevivente;

/*
**O sobrevivente sempre acerta o ferimento e ganha 1 ponto de experiência quando mata 
um zumbi.**,
*/
