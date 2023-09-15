const Survivor = require('../entities/Survivor');

describe("/Survivor", () => {
  let survivor1;

  beforeEach(() => {
    survivor1 = new Survivor("Letícia");
  })

  it("Create survivor with class Survivor", () => {
    const result = {
      "actionsPerTurn": 3, 
      "bag": {"hands": [], "inventory": []}, 
      "experience": 0, 
      "injuries": 0, 
      "name": "Letícia", 
      "skills": {"allSkills": [], "level": "blue"}
    };

    expect(survivor1).toEqual(result);
  })

  it("Check when survivor suffer injury", () => {
    survivor1.sufferInjury();

    expect(survivor1.injuries).toEqual(1);
  })

  it("Check the add expience function", () => {
    survivor1.addExperience(4);

    expect(survivor1.experience).toEqual(4);
  })
})