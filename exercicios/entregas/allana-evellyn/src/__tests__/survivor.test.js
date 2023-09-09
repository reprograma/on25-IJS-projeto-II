const { Survivor } = require("../survivor");

describe("Survivor", () => {
  let survivor;
  beforeEach(() => {
    survivor = new Survivor("Foo Lana");
    zombie = { receiveDamage: jest.fn() };
    jest.spyOn(survivor, "turnIntoZombie");
    jest.spyOn(survivor, "addBagEquipment");
    jest.spyOn(survivor, "addHandEquipment");
    jest.spyOn(survivor, "confirmSurvivorLevel");
    jest.spyOn(survivor, "winExperience");
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
    consoleSpy.mockRestore();
  });

  it("should create a survivor", () => {
    expect(survivor.name).toBe("Foo Lana");
  });

  it("should attack a zombie", () => {
    survivor.attackZombie(zombie);
    expect(zombie.receiveDamage).toHaveBeenCalled();
  });

  it("should decrease actions when attacks a zombie", () => {
    survivor.attackZombie(zombie);
    expect(survivor.actions).toEqual(2);
  });

  it("should not call receive damage when the survivor dont have enough actions left", () => {
    survivor.actions = 0;
    expect(zombie.receiveDamage).not.toHaveBeenCalled();
  });

  it("should increase injuries when zombie attack succeed", () => {
    survivor.takeInjury();
    expect(survivor.injuries).toEqual(1);
  });

  it("should turn into a zombie when a survivor has 3 injuries", () => {
    survivor.takeInjury();
    survivor.takeInjury();
    survivor.takeInjury();
    expect(survivor.turnIntoZombie).toHaveBeenCalled();
  });

  it("should add a hand equipment", () => {
    survivor.addHandEquipment("Sword");
    expect(survivor.addHandEquipment).toHaveBeenCalled();
  });

  it("should not add more than two items on the survivors hands", () => {
    survivor.handEquipment = ["Water bottle", "Sword"];
    survivor.addHandEquipment("Lantern");
    expect(survivor.handEquipment.length).toBe(2);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Your hands are full. Please drop an item or store it on your bag."
    );
  });

  it("should not add more than 7 items on the survivors bag", () => {
    survivor.bagEquipment = [
      "Lantern",
      "Batteries",
      "Spam",
      "Jacket",
      "Silver tape",
      "Mug",
      "Socks",
    ];
    survivor.addBagEquipment("Water bottle");
    expect(survivor.bagEquipment.length).toBe(7);
    expect(consoleSpy).toHaveBeenCalledWith(
      "You dont have enough space in your bag. Drop an item and then try again."
    );
  });

  it("should change change to level yellow when experience is 6", () => {
    survivor.winExperience(6);
    survivor.confirmSurvivorLevel();
    expect(survivor.level).toBe("Yellow");
  });

  it("should change change to level orange when experience is 18", () => {
    survivor.winExperience(18);
    survivor.confirmSurvivorLevel();
    expect(survivor.level).toBe("Orange");
  });
  it("should change change to level red when experience is 42", () => {
    survivor.winExperience(42);
    survivor.confirmSurvivorLevel();
    expect(survivor.level).toBe("Red");
  });
});
