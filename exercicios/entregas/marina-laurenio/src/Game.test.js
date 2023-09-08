const { Game } = require("./Game.js");
const { Survivor } = require("./Survivor.js");

describe("Game tests", () => {
  let game;
  let survivor1;
  let survivor2;

  beforeEach(() => {
    game = new Game();
    survivor1 = new Survivor("John");
    survivor2 = new Survivor("Alice");
  });
  test("Add or remove a survivor", () => {
    game.addSurvivor(survivor1);
    expect(game.survivors).toContain(survivor1);

    game.removeSurvivor(survivor1);
    expect(game.survivors).not.toContain(survivor1);
  });

  test("update level of difficulty", () => {
    game.addSurvivor(survivor1);
    game.addSurvivor(survivor2);

    expect(game.difficulty).toBe("Azul");

    survivor1.levelUp();
    expect(game.difficulty).toBe("Amarelo");

    survivor2.levelUp();
    expect(game.difficulty).toBe("Amarelo");
  });
});
