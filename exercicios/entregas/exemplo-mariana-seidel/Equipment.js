class Equipments {
    equipments = [];

    choseEquipments() {
        this.equipments = [];
        this.handEquipments = [];
    }

    addHandsEquipment(equipment) {
        if (this.equipments.length < 2) {
            this.handEquipments.push(equipment)
            return `Você pegou ${equipment}!`
        } else {
            'Suas mãos estão cheias!'
        }
    }

    reduceEquipment(equipment) {
        for (let i = this.totalInjuries; i < 3; i++) {
            equipments = this.equipments.filter(item => item != equipment);
            this.equipments = equipments;
        }

        if (this.equipments.length > 7) {
            const diference = this.equipments.length - 7;
            return `Você possui mais equipamentos do que sua capacidade de armanezamento! Descarte ${diference} itens.`
        }
    }
}

class CombateItems extends Equipments {
    combate = [
        'bastão de baseball',
        'frigideira',
        'machado',
        'pistola'
    ];
}

class UtilitarianItems extends Equipments {
    utilitarian = [
        'garrafa de água',
        'comida',
        'kit de primeiros socorros'
    ];
}

module.exports = { Equipments }


