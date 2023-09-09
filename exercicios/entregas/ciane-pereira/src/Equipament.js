class Equipment {
    equipments = [];

    kindEquipment() {
        this.handEquipments = [];
        this.equipments = [];
    }

    handWichEquipments(equipment) {
        if(this.equipments.length < 2) {
            this.handEquipments.push(equipment)
            console.log(`Você tem ${equipment}.`);
        } else {
            'Suas mãos estão cheias!'
        }
    }
    
    limitEquipment(equipment) {
        for (let i = this.totalInjuries; i < 3; i++) {
            equipments = this.equipments.filter(item => item != equipment);
            this.equipments = equipments;
        }

        if (this.equipments.length > 7) {
           let limit = this.equipments.length - 7;
            console.log(`Você tem mais equipamento que limite permitido! Desfazer do ${limit} itens.`) 
        }
    }
}

class fightItem extends Equipment {
    fight = [
        'bastão de baseball',
        'frigideira',
        'machado',
        'pistola'
    ];
}

class utilityItem extends Equipment {
    utility = [
        'garrafa de água',
        'comida',
        'kit de primeiros socorros'
    ];

}

module.exports = { Equipment };