let { Level } = require('./Level');
let { Survivor } = require('./Survivor');

describe('verify level class', () => {

    let level, survivor;

    beforeEach(() => {
        level = new Level(survivor);
        survivor = new Survivor();
    })

    it('should check the experience when de surviver begings the match', () => {
        expect(survivor.experience).toBe(0);
    });

    it('should check the level when de surviver begings the match', () => {
        expect(survivor.level).toBe('Blue');
    });

    it('should check the function changeLevel', () => {
        survivor.experience = 19;
        expect(level.changeLevel()).toBe('Seu nível é: Orange.');
    });

})