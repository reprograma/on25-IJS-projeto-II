const { ArvoreHabilidades } = require('../ArvoreHabilidades');

describe('Testando a classe Arvore de Habilidades', () => {
    let arvoreHabilidades;

    beforeEach(() => {
        arvoreHabilidades = new ArvoreHabilidades();
    });

    it('Deve desbloquear habilidades certas de acordo com o nível do personagem', () => {
        expect(arvoreHabilidades.desbloquearHabilidade('Azul')).toBe('+1 ação de movimento');
        expect(arvoreHabilidades.desbloquearHabilidade('Amarelo')).toBe('+1 de dano');
    });

    it('Deve listar habilidades potenciais de acordo com cada nível', () => {
        expect(arvoreHabilidades.listarHabilidadesPotenciais('Laranja')).toEqual(['+1 Equipamento de Mão', '+1 ação de movimento']);
        expect(arvoreHabilidades.listarHabilidadesPotenciais('Vermelho')).toEqual(['+1 Equipamento de Mão', 'Tesouro oculto']);
    });

    it('Deve ser undefined as habilidades de um nível não existente', () => {
        expect(arvoreHabilidades.listarHabilidadesPotenciais('Roxo')).toBeUndefined();
    });
});
