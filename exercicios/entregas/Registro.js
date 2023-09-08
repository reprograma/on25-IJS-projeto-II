class Registro {
    constructor() {
        this.eventos = [];
    }

    addEvento(evento) {
        const dataHora = new Date().toLocaleString();
        this.eventos.push(`${dataHora} - ${evento}`);
    }

    listarEventos() {
        for (const evento of this.eventos) {
            console.log(evento);
        }
    }
}

module.exports = { Registro };
