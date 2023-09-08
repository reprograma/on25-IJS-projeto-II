class Equipamentos {
    constructor() {
        this.equipamentosCarregados = [];
        this.equipamentosEmReserva = [];
        this.capacidadeMaxima = 7;
    }

    addEquipamento(tipo, equipamento) {
        const equipamentos = this.equipamentosCarregados.length < this.capacidadeMaxima ? this.equipamentosCarregados : this.equipamentosEmReserva;

        equipamentos.push({ tipo, equipamento });
        const mensagem = `Equipamento ${equipamento} adicionado aos equipamentos ${equipamentos === this.equipamentosCarregados ? 'carregados' : 'em reserva'}.`;
        
        return mensagem;
    }

    removerEquipamento(tipo, equipamento) {
        const equipamentos = tipo === 'combate' ? this.equipamentosCarregados : this.equipamentosEmReserva;
        const index = equipamentos.findIndex(item => item.equipamento === equipamento);

        if (index !== -1) {
            equipamentos.splice(index, 1);
            return `Equipamento ${equipamento} removido.`;
        } else {
            return 'Equipamento não encontrado.';
        }
    }
}

module.exports = { Equipamentos }
