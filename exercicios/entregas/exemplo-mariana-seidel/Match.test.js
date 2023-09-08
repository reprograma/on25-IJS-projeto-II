const { Match } = require('./Match');
const { Survivor } = require('./Survivor');

describe('verify match class', () => {

    let match1;

    beforeEach(() => {
        match1 = new Match();
    })

    it('should check a match when there is not survivers', () => {
        expect(match1).toBe('Fim do jogo!');
    });

    it('should check add players when the parameter is not a survivor object', () => {
        const player1 = 'player1';
        expect(match1.addSurvivors(player1)).toBe('Insira um jogador válido.');
    });

    it('should check add players', () => {
        const player1 = new Survivor('player1');
        match1.addSurvivors(player1);
        expect(match1.survivors).toBe(1);
    });
})