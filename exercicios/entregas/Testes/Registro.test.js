const { Registro } = require('../Registro');

describe('Testando a classe Registro', () => {
    let registro;

    beforeEach(() => {
        registro = new Registro();
    });

    it('Deve adicionar a quantidade correta de enventos que aconteceram na partida', () => {
        registro.addEvento('Zumbis foram adicionados na partida');
        registro.addEvento('Lilo e Stitch foram adicionados na partida');
        expect(registro.eventos).toHaveLength(2);
    });
});
