class Equipamentos { 
    static equipamentos = []; 
    constructor(bastao_baseball, frigideira, machado, pistola, garrafa_dagua, comida, primeiros_socorro) {
        this.bastao_baseball = bastao_baseball;
        this.frigideira = frigideira;
        this.machado = machado;
        this.pistola = pistola;
        this.garrafa_dagua = garrafa_dagua;
        this.comida = comida;
        this.primeiros_socorro = primeiros_socorro;  
        Equipamentos.equipamentos.push(this);

    }  
}

module.exports = {Equipamentos}; 