class Equipamento {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }

    atualizarCapacidadeEquipamentos() {
        const capacidadeMaxima = 7 - this.ferimentos;
        if (this.equipamentosMaos.length > 2) {
            this.equipamentosReserva.push(this.equipamentosMaos.pop());
        }
        while (this.equipamentosMaos.length > 2) {
            this.equipamentosReserva.push(this.equipamentosMaos.pop());
        }
        while (this.equipamentosReserva.length > capacidadeMaxima - this.equipamentosMaos.length) {
            // O sobrevivente precisa descartar equipamentos de reserva
            // Vou implementar a lógica para escolher qual equipamento descartar
        }
    }
}