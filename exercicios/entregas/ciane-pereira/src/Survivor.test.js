const { Survivor } = require('./Survivor')

describe('verify class Suvivor', () => {

  let survivor1, survivor2;

  beforeEach(() => {
    survivor1 = new Survivor();
    survivor2 = new Survivor();
  })

  it('should check when the survivor suffers an injury', () => {
    expect(survivor1.injuries()).toBe('Você tem o total de 1 ferimentos!');
  })

  it('should check when the survivor suffers 3 injuries and die', () => {
    survivor1.injuries();
    survivor1.injuries();
    expect(survivor1.injuries()).toBe('Você morreu!! Fim do jogo.');
  })

  it('should check when the survivor kill a zumbi', () => {
    expect(survivor1.killZumbi()).toBe('Você matou um zumbi!');
    expect(survivor1.experience).toBe(1);
  })

  it('should check a list of survivors', () => {
    survivor1.name ='Claire';
    survivor2.name = 'Jamie';
    expect(Survivor.allSurvivors).toBe(`[{
            survivor: Survivor {
                name:'Claire',
                totalInjuries: 0,
                actions: 3,
                equipment: {},
                experience: 0,
                level: 'blue',              
                skillTree: []
          }
          },
          {
            survivor: Survivor {
              name: 'Jamie',
              totalInjuries: 0,
              actions: 3,
              equipment: {},
              experience: 0,
              level: 'blue',             
              skillTree: []
            }
          }]`);
  })
})