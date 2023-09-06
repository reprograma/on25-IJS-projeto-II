const { Survivor } = require("./survivor");

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

  describe("Test the method getHurt()", () => {
    it("should return a message 'Laíssa, você foi atingido pela 1ª vez.'", () => {
      const getHurt = survivor1.getHurt();
      expect(getHurt).toBe("Laíssa, você foi atingido(a) pela 1ª vez.");
    });

    it("should return a message Laíssa, você perdeu! depois de ser atingido 3 vezes", () => {
      survivor1.getHurt();
      survivor1.getHurt();
      survivor1.getHurt();

      expect(survivor1.getHurt()).toBe("Laíssa, você perdeu!");
    });
  });
  
});
