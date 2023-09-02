class Sobrevivente {
    nome;
    nivel;
    ferimentos;
    habilidades;
    equipamentos;


    constructor(nome, habilidades, equipamentos) {
        this.nome = nome;
        this.nivel = 0;
        this.ferimentos = 0;
        this.habilidades.push(habilidades);
        this.equipamentos.push(equipamentos);
    }
}