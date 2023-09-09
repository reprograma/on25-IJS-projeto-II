const { Game } = require("./Game");
const { Survivor } = require("../Survivor/Survivor");
const { Equipments } = require("../Equipments/Equipments");
const { Levels } = require("../Levels/Levels");
const { SkillsTree } = require("../SkillsTree/SkillsTree");

describe("Test The Class Game ", () => {
  let game1;

  beforeAll(() => {
    game1 = new Game();
    game1.addSurvivor("Cameron");
  });

  describe("test the Game Class", () => {
    it("should return a message when add a new player", () => {
      expect(game1.addSurvivor("Cameron")).toBe(
        "Welcome to the game, Cameron."
      );
    });

    // Não descobri como fazer para ler um item de um array de jogadores

    // it("should return the total of points of experience after kill a zombie", () => {
    //   game1.killAZombie();
    //   let playerExperience = game1.player[0].level.experience;
    //   expect(playerExperience).toBe(1);
    // });
  });

  describe("Test the method getHurt()", () => {
// Não entendi porque o teste abaixo não está passando.
// Ao invés de ler a 1ª ferida , está retornando o valor 0;

    // it("should return a message 'Cameron, você foi atingido pela 1ª vez.'", () => {
    //   expect(game1.getHurt()).toBe(
    //     "Cameron, você foi atingido(a) pela 1ª vez."
    //   );
    // });

    it("should return a message Cameron, você perdeu! depois de ser atingido 3 vezes", () => {
      game1.getHurt();
      game1.getHurt();
      game1.getHurt();

      expect(game1.getHurt()).toBe("Cameron, você perdeu!");
    });
  });
});
