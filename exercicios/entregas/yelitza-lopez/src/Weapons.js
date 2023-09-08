
class Weapons {
    MAX_EQUIPMENT;

    constructor(){

        this.MAX_EQUIPMENT = 7; 
        this.equipment = {
            fightingItems : ['bastão de baseball', 'frigideira', 'machado', 'pistola' ],
            utilityItems : ['garrafa de água', 'comida', 'kit de primeiros socorros']
        }
    }


    addWeapon(type, item) {
        let equipmentCount = 0;
        if (equipmentCount <= this.MAX_EQUIPMENT) {
            this.equipment[type].push(item);
            equipmentCount++;
            return `equipamento ${item} liberado`;
        } else {
            return 'Sem espaço para levar outro equipamento';
        }
    }
    
}

module.exports = {Weapons};