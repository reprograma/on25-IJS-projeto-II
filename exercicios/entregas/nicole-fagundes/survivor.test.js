const Survivor = require('./Survivor');

describe("testing survivor", () => {

    var survivor;

    beforeEach(() => {
        survivor = new Survivor("teste");
    })
    test("should increment correctly", () => {
        survivor.wounds(true);
        expect(survivor.wound).toBe(1);
    })
})