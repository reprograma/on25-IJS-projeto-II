const { Sobrevivente } = require('../Sobrevivente');

describe('Testando a classe Sobrevivente', () => {
  let sobrevivente1;

  beforeEach(() => {
    sobrevivente1 = new Sobrevivente('Daphne');
  });

  it('O personagem deve ser inicializado com 0 experiências', () => {
    expect(sobrevivente1.experiencia).toBe(0);
  });

  it('O personagem deve ser inicializado com 3 ações', () => {
    expect(sobrevivente1.acoesRestantes).toBe(3);
  });

  it('O personagem deve ser inicializado com limite de 3 ferimentos', () => {
    expect(sobrevivente1.limiteFerimentos).toBe(3);
  });

  it('Deve adicionar a habilidade condizente ao nível do personagem', () => {
    sobrevivente1.addHabilidade("+1 ação de movimento");
    expect(sobrevivente1.habilidades).toEqual("+1 ação de movimento");
  });

  it('O personagem deve começar o jogo no nível Azul', () => {
    expect(sobrevivente1.nivel).toBe('Azul'); 
  });

  it('deve realizar uma ação e atacar com chance de ataque corretamente', () => {
    sobrevivente1.realizarAcao();
    expect(sobrevivente1.acoesRestantes).toBe(2);
  });
});
