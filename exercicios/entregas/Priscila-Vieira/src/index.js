class Sobrevivente{
    constructor(nome){
        this.nome = nome;
        this.ferimentos = 0;
        this.acoes = 3;
        this.equipamentos = {
            maos: [],
            reserva: [],
        };
        this.nivel = "Azul";
        this.experiencia = 0;
        this.arvoreHabilidades = [];
    }
}