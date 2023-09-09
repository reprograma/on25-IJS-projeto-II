const {Levels} = require("./Levels");

describe("" , () => {
  let nivel1; 
  beforeEach(() => {
    nivel1 = new Levels();
  })
  it("should return the current Level Blue", () => {
    nivel1.experience = 6;
    expect(nivel1.currentLevel).toBe("Blue");
  });

  it("should return the current Level Yellow", () => {
    nivel1.experience = 15;
    nivel1.setCurrentLevel();
    expect(nivel1.currentLevel).toBe("Yellow");
  })
})
