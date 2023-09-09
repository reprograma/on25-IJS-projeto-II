const { Survivor } = require("./Survivor");

describe("Test de Class Survivor", () => {
  let survivor1;
  beforeAll(() => {
    survivor1 = new Survivor("Laíssa");
  });

  it("should return name 'Laíssa'", () => {
    expect(survivor1.name).toBe("Laíssa");
    expect(survivor1.injury).toEqual(0);
  });

  it("should return injury equals 0", () => {
    expect(survivor1.injury).toEqual(0);
  });  

  it("should return the survivor Level Blue", () => {
    expect(survivor1.level.currentLevel).toBe("Blue");
  });
});
