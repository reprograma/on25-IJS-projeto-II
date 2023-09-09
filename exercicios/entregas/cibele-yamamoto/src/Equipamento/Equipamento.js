class Equipamento {
    nome;
    tipo; //pode ser luta ou utilitario

    static equipamentos = [
        {
            "nome": "bastao de baseball",
            "tipo": "luta"
        },
        {
            "nome": "frigideira",
            "tipo": "luta"
        },
        {
            "nome": "machado",
            "tipo": "luta"
        },
        {
            "nome": "pistola",
            "tipo": "luta"
        },
        {
            "nome": "garrafa de água",
            "tipo": "utilitario"
        },
        {
            "nome": "comida",
            "tipo": "utilitario"
        },
        {
            "nome": "kit primeiro socorros",
            "tipo": "utilitario"
        },
    ]

    constructor(tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

}

/*
Equipamentos podem ser **itens utilizados para lutar,** como:
- bastão de baseball,
- frigideira,
- machado,
- pistola;

ou itens utilitários, como:
- garrafa de água,
- comida,
- kit de primeiros socorros.
*/