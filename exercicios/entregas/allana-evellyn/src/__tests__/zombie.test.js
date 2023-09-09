const { Zombie } = require("../zombie");

describe("Zombie", () => {
  let zombie;
  let survivor;

  beforeEach(() => {
    zombie = new Zombie("Blue");
    survivor = { takeInjury: jest.fn() };
  });

  it("should create a zombie", () => {
    expect(zombie.level).toBe("Blue");
  });

  it("should damage survivor when zombie attacks", () => {
    zombie.attackSuccessRates.Blue = 100;
    zombie.attack(survivor);
    expect(survivor.takeInjury).toHaveBeenCalled();
  });

  it("should decrease zombie actions after zombie attack", () => {
    zombie.attackSuccessRates.Blue = 100;
    zombie.attack(survivor);
    expect(zombie.actions).toEqual(0);
  });
});
