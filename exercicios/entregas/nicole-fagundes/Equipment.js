class Equipment {
    equipments = [];
    maxEquipments = 7;
    maxHandsEquipments = 2;
    maxReserveEquipments = 5;


    myEquipments(equipment){
        if(this.equipments.length >= this.maxEquipments){
            console.log("Você chegou ao limite máximo da sua mochila.");
        }else{
            this.equipments.push(equipment);
            console.log(`Você tem direito a guardar mais ${this.maxEquipments - this.equipments.length} equipamento(s)`);
        }
    }

    chooseEquipment(equipment){
        if(this.equipments.includes(equipment) && this.maxHandsEquipments <= 2){
            this.maxHandsEquipments--;
            return(`Você escolheu ${equipment}! Você tem direito a escolher mais ${this.maxHandsEquipments} equipamento.`);
        }else{
            return("Esse equipamento não faz parte da sua mochila!")
        }
    }


}
module.exports = Equipment;