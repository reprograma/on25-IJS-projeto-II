const { Survivor } = require('./Survivor')

describe('verify survivor class', () => {

  let survivor1, survivor2;

  beforeEach(() => {
    survivor1 = new Survivor();
    survivor2 = new Survivor();
  })

  it('should check when the survivor suffers an injury', () => {
    expect(survivor1.injuries()).toBe('Cuidado, você possui o total de 1 ferimento(s)!');
  })

  it('should check when the survivor suffers 03 injuries and die', () => {
    survivor1.injuries();
    survivor1.injuries();
    expect(survivor1.injuries()).toBe('Fim do jogo. Você morreu!');
  })

  it('should check when the survivor kill a zumbi', () => {
    expect(survivor1.killZumbi()).toBe('Zumbi morto!');
    expect(survivor1.experience).toBe(1);
  })

  it('should check a list of survivors with the static variable', () => {
    survivor1.name = 'Ellie';
    survivor2.name = 'Joel';
    expect(Survivor.allSurvivors).toBe(`[{
            survivor: Survivor {
              name: 'Ellie',
              totalInjuries: 0,
              actions: 3,
              equipment: {},
              level: 'blue',
              experience: 0,
              skillTree: []
            }
          },
          {
            survivor: Survivor {
              name: 'Joel',
              totalInjuries: 0,
              actions: 3,
              equipment: {},
              level: 'blue',
              experience: 0,
              skillTree: []
            }
          }]`);
  })
})