const { Zumbi } = require('../Zumbi');

describe('Testando a classe Zumbi', () => {
  let zumbi1;

  beforeEach(() => {
    zumbi1 = new Zumbi();
  });

  it('O zumbi deve ser criado com uma ação restante', () => {
    expect(zumbi1.acoesRestantes).toBe(1);
  });

  it('O zumbi deve ficar com 1 ferimento se for atingido', () => {
    zumbi1.addFerimento();
    expect(zumbi1.ferimentos).toBe(1);
  });


  it('Quando não houver ações restantes, o zumbi não deve realizar nada', () => {
    zumbi1.acoesRestantes = 0;
    expect(zumbi1.realizarAcao()).toBe(false);
  });
});
