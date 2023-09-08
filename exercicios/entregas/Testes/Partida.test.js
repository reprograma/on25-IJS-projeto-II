const { Partida } = require('../Partida');
const { Sobrevivente } = require('../Sobrevivente');
const { Zumbi } = require('../Zumbi');

describe('Testando a classe Partida', () => {
    let partida, sobrevivente1, sobrevivente2, zumbi;

    beforeEach(() => {
        partida = new Partida();
        sobrevivente1 = new Sobrevivente('Daphne');
        sobrevivente2 = new Sobrevivente('Velma');
        zumbi = new Zumbi();
    });

    it('Deve adicionar um sobrevivente na partida', () => {
        partida.addSobrevivente(sobrevivente1);
        expect(partida.sobreviventes).toContain(sobrevivente1);
    });

    it('Deve remover zumbis da lista de sobreviventes', () => {
        partida.sobreviventes = [sobrevivente1, sobrevivente2, zumbi];
        partida.removerZumbi();
        expect(partida.sobreviventes).not.toContain(zumbi);
    });
});
