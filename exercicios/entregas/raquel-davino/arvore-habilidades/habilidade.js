class Habilidade {
    
  static habilidades = {
 
    nivelAmarelo: {
        acaoAdicional: {
            descricao: "ação adicional",
            value: false,
        }
    }, 
    
    nivelLaranja: {
        danoAdicional: {
            descricao: "dano adicional",
            value: false,
        },
        tesouroEscondido: {
            descricao: "tesouro escondido",
            value: false,
        },
    },
    
    nivelVermelho: {
        movimentoAdicional: {
            descricao: "movimento adicional",
            value: false,
        },
        equipamentoAdicional: {
            descricao: "equipamento adicional",
            value: false,
        },
        vidaAdicional: {
            descricao: "vida adicional",
            value: false,
        }
    }
   }

   getHabilidades() {
    return Habilidade.habilidades
    
   }

   setHabilidades(habilidade, nivel) {
        //to do
   }

   desbloquearHabilidade(habilidade, nivel) {
        //to do
   }
}

exports.module(Habilidade);