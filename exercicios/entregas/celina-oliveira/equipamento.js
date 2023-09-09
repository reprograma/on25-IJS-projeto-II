class Equipamento {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
        this.capacidadeEquipamentos = 7;
        this.equipamento = {
            equipamentoLuta : ['bastão de baseball','frigideira', 'machado', 'pistola'] ,
            utilitarios : ['garrafa de água','comida','kit de primeiros socorros']
    }
}


addEquipamento(equipamento) {
    if (this.equipamentos.maos.length < 2) {
        this.equipamentos.maos.push(equipamento);
        return `${this.nome} equipou ${equipamento.nome} nas mãos.`;
    } else if (this.equipamentos.reserva.length < this.capacidadeEquipamentos - 2) {
        this.equipamentos.reserva.push(equipamento);
        return `${this.nome} adicionou ${equipamento.nome} à reserva.`;
    } else {
        return `${this.nome} não pode carregar mais equipamentos.`;
    }
}

removerUmEquipamento(item)


updateCapacidadeEquipamentos() {
    if (this.ferimentos > 0) {
        this.capacidadeEquipamentos--;
        if (this.equipamentos.reserva.length > this.capacidadeEquipamentos) {
            const equipamentoDescartado = this.equipamentos.reserva.pop();
            return `${this.nome} descartou o equipamento ${equipamentoDescartado.nome}.`;
        }
    }

}
}

module.exports = { equipamento };