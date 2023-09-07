const { Sobrevivente } = require("./sobrevivente");

describe("Teste criação de Sobrevivente", () => {
    let sobrevivente1;

    beforeAll(() => {
        sobrevivente1 = new Sobrevivente("Ashe");
    });

    it("Deve retornar o sobrevivente", () => {
        expect(sobrevivente1.nome).toBe("Ashe");
        expect(sobrevivente1.ferimentos).toEqual(0);

    });

    it("Deve rodar a função buscarItem()", () => {
        expect(sobrevivente1.buscarItem()).toBe("Ok");
        console.log(sobrevivente1);
    });

    it("Deve rodar a função acaoMover()", () => {
        expect(sobrevivente1.acaoMover()).toBe("Ok");
    })

    it("Deve iniciar um novo turno", () => {
        expect(sobrevivente1.novoTurno()).toBe("Ok");
    })

    it("Deve rodar a função acaoMover()", () => {
        expect(sobrevivente1.acaoMover()).toBe("Ok");
    })

    it("Deve iniciar um novo turno", () => {
        expect(sobrevivente1.novoTurno()).toBe("Ok");
    })

    it("Deve rodar a função acaoMover()", () => {
        expect(sobrevivente1.acaoMover()).toBe("Ok");
        console.log(sobrevivente1);
    })

    /* it("Deve atacar um zumbi", () => {
         expect(sobrevivente1.matarZumbi()).toBe("Atk ok");
         console.log(sobrevivente1.experiencia);
     }) */

})