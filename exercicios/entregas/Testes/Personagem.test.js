const { Personagem } = require('../Personagem');

describe('Testando a classe Personagem', function() {
    let personagem1;

    beforeEach(() => {
        personagem1 = new Personagem();
    });

    it('O personagem deve começar no jogo estando vivo e sem ferimentos', () => {
        expect(personagem1.ferimentos).toBe(0);
        expect(personagem1.vivo).toBe(true);
      });

    it('Adicionar ferimento caso personagem esteja vivo', function() {
        personagem1.addFerimento();
        expect(personagem1.ferimentos).toBe(1);
    });

    it('O personagem deve morrer quando a quantidade de limite de ferimentos for excedida', () => {
        personagem1.limiteFerimentos = 1;
        personagem1.addFerimento();
        expect(personagem1.ferimentos).toBe(1);
        expect(personagem1.vivo).toBe(false);
    });

    it('Não adicionar novos ferimentos se o personagem estiver morto', () => {
        personagem1.limiteFerimentos = 1;
        personagem1.addFerimento();
        personagem1.addFerimento();
        expect(personagem1.addFerimento()).toBe(false);
    });
});