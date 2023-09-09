const Equipment = require("./Equipment");
const Survivor = require("./Survivor");

describe("class Equipment", () => {

    var survivor = new Survivor("teste");
    test("should choose the right equipment", () => {
        survivor.equipments = ["bastão de baseball", "frigideira", "machado"];
        
        expect(survivor.chooseEquipment("bastão de baseball")).toBe("Você escolheu bastão de baseball! Você tem direito a escolher mais 1 equipamento.");

    }) 

    test("should not accept the wrong equipment", () => {
        survivor.equipments = ["bastão de baseball", "frigideira", "machado"];
        
        expect(survivor.chooseEquipment("kit médico")).toBe("Esse equipamento não faz parte da sua mochila!");

    })
})