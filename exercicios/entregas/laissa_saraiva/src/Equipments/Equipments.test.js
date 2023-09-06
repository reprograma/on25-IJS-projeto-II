const {Equipments} = require("./Equipments");

describe("Test de Equipments Class", () => {
  let equipments;

  beforeAll(() => {
    equipments = new Equipments();
  });
  it("should return de Max of equipments equals 7", () => {
    expect(equipments.maxOfEquipments).toEqual(7);
  });

  it("should set a new quantity of Max of equipments, and returns 5", () => {
    equipments.maxOfEquipments = 5;
    expect(equipments.maxOfEquipments).toEqual(5);
  });

  it("should return the fighting Items", () => {
    const fightingItems = equipments.resources.fightingItems;
    expect(fightingItems).toEqual(["bastão de baseball", "frigideira", "machado", "pistola"])
  });

  it("should return the utilities Items", () => {
    const utilitiesItems = equipments.resources.utilitiesItems;
    expect(utilitiesItems).toEqual(["garrafa de água", "comida", "kit de primeiros socorros"])
  });
});