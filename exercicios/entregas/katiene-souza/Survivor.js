import { levelEquipment } from "./constants.js";

export class Survivor {

    bagSpace = 7;

    static survivors = 0;

    constructor(name) {
        this.name = name;
        this.injuries = 0;
        this.bag = ["faca", "garrafa de água", "maçã"];
        this.level = "azul";
        this.actions = 3;
        this.hands = 2;
        this.experience = 18;

        Survivor.survivors++
    }

    get checkLevel() {
        switch (this.level) {
            case "blue":
                console.log("Humm... Ainda não tem nada liberado para você!");
                break;
            case "yellow":
                console.log(`Neste nível você pode ter: ${levelEquipment.yellow}.`);
                break;
            case "orange":
                console.log(`Neste nível você pode ter: ${levelEquipment.orange}.`);
                break;
            case "red":
                console.log(`Neste seu nível você pode ter: ${levelEquipment.red}.`);
                break;
        };
    }

    addEquipment(equipament) {
        const availableSpace = this.bagSpace - this.bag.length;

        if (availableSpace <= 0) {
            console.log("Você não tem espaço na mochila para adicionar este equipamento!");
        }

        const availableEquipment = levelEquipment[this.level];

        if (!availableEquipment) {
            console.log(`O nível "${this.level}" não possui equipamentos disponíveis!`);
        }

        if (!availableEquipment.includes(equipament)) {
            console.log(`Este equipamento não está disponível para o nível "${this.level}".`);
        }

        this.bag.push(equipament);

        console.log("Equipamento adicionado!");
    }

    get levelUp() {
        const experience = this.experience;

        if (experience < 6) {
            console.log("Você precisa ter pelo menos 6 de experiência para subir de nível!");
        } else if (experience <= 18) {
            this.level = "yellow";
            console.log(`Parabéns!! Seu nível agora é "${this.level}".`);
        } else if (experience <= 42) {
            this.level = "orange";
            console.log(`Parabéns!! Seu nível agora é "${this.level}".`);
        } else {
            this.level = "red";
            console.log(`Parabéns!! Seu nível agora é "${this.level}".`);
        }
    }

    attack(survivor) {
        
    }
}

