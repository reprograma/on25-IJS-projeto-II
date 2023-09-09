const { Equipamento} = require('./equipamento');
describe('Equipamento', () => {
    let equipamento;

    beforeEach(() => {
        equipamento = new Equipamento('machado', 'luta');
    });

    test('deve ter um nome e um tipo', () => {
        expect(equipamento.nome).toBe('machado');
        expect(equipamento.tipo).toBe('luta');
    })


})