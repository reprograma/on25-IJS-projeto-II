class Equipamento {

    listaArmasEquipadas = [];
    listaUtilitariosEquipados = [];
    equipamentos;

    static limiteEquipamentos;
    static limiteEquipamentosEmMaos;
    static limiteEquipamentosReserva;

    constructor() {
        Equipamento.limiteEquipamentosEmMaos = 2;
        Equipamento.limiteEquipamentosReserva = 5;
        Equipamento.limiteEquipamentos = 7;
        this.qtdArmasEquipadas = 0;
        this.configurarEquipamentos();
        this.equiparArma("Bastão de baseball", 1);
        this.equiparUtilitario("Garrafa de água", 1);
    }

    configurarEquipamentos() {
        this.equipamentos = {
            armas: {
                bastaoDeBaseball: {
                    descricao: "Bastão de baseball",
                    equipado: false,
                    quantidade: 0,
                },
                frigideira: {
                    descricao: "Frigideira",
                    equipado: false,
                    quantidade: 0,
                },
                machado: {
                    descricao: "Machado",
                    equipado: false,
                    quantidade: 0,
                },
                pistola: {
                    descricao: "Pistola",
                    equipado: false,
                    quantidade: 0,
                }
            },
            utilitarios: {
                agua: {
                    descricao: "Garrafa de água",
                    equipado: false,
                    quantidade: 0,
                },
                comida: {
                    descricao: "Comida",
                    equipado: false,
                    quantidade: 0,
                },
                curativo: {
                    descricao: "Kit de primeiros socorros",
                    equipado: false,
                    quantidade: 0,
                }
            }
        };
    }

    verificarLimiteEquipamentos(quantidadeProximoEquipamento) {
        let qtdItensEquipados = this.listaArmasEquipadas.length + this.listaUtilitariosEquipados.length;
        if ((qtdItensEquipados + quantidadeProximoEquipamento) <= Equipamento.limiteEquipamentos) {
            return true;
        } else {
            console.log(`Existem ${qtdItensEquipados} itens equipados. Não será possível incluir mais ${quantidadeProximoEquipamento}, pois o limite de equipamentos é de ${Equipamento.limiteEquipamentos}`)
            return false;

        }
    }

    equiparArma(arma, quantidadeArma) {
        if(!(this.verificarLimiteEquipamentos(quantidadeArma))) {
            return;
        }
        const keysArmas = Object.keys(this.equipamentos.armas);
        keysArmas.forEach(element => {
            let descricao = this.equipamentos.armas[element].descricao;
            if(arma === descricao) {
                this.equipamentos.armas[element].equipado = true;
                this.equipamentos.armas[element].quantidade = quantidadeArma;
                for (let i = 0; i < quantidadeArma; i++) {
                    this.listaArmasEquipadas.push(descricao);
                }
            }
        });
        console.log("listaArmasEquipadas", this.listaArmasEquipadas);
    }

    equiparUtilitario(utilitario, quantidadeUtilitario) {

        if(!(this.verificarLimiteEquipamentos(quantidadeUtilitario))){
            return;
        }
        const keysUtilitarios = Object.keys(this.equipamentos.utilitarios);
        keysUtilitarios.forEach(element => {
            let descricao = this.equipamentos.utilitarios[element].descricao;
            if (utilitario === descricao) {
                this.equipamentos.utilitarios[element].equipado = true;
                this.equipamentos.utilitarios[element].quantidade = quantidadeUtilitario;
                for (let i = 0; i < quantidadeUtilitario; i++) {
                    this.listaUtilitariosEquipados.push(descricao);
                }
            }
        });
        console.log("listaUtilitariosEquipados", this.listaUtilitariosEquipados);
    }
  
    equipar(equipamento, quantidade, tipo) {
        switch (tipo) {
            case "arma":
                this.equiparArma(equipamento, quantidade);
                break;
            case "utilitario":
                this.equiparUtilitario(equipamento, quantidade);
                break;
        }
    }

    desequipar(quantidadeItemDesequipar) {
        const listaEquipamentosEquipados = [...this.listaArmasEquipadas, ...this.listaUtilitariosEquipados];
        const indiceAleatorio = Math.floor(Math.random() * listaEquipamentosEquipados.length);
        let equipamentoRemovido;
                
        const keysArmas = Object.keys(this.equipamentos.armas);
        keysArmas.forEach(element => {
            let descricao = this.equipamentos.armas[element].descricao;
            if(equipamentoRemovido === descricao) {

                this.equipamentos.armas[element].equipado = true;
                this.equipamentos.armas[element].quantidade = this.equipamentos.armas[element].quantidade - quantidadeItemDesequipar;
                equipamentoRemovido = listaEquipamentosEquipados.splice(indiceAleatorio, 1)[0];

            }
        });
        console.log("listaArmasEquipadas", this.listaArmasEquipadas);


    }
}

let equipamentoTeste = new Equipamento();
equipamentoTeste.equipar("Frigideira", 2, "arma");
equipamentoTeste.desequipar();


exports.module(Equipamento);