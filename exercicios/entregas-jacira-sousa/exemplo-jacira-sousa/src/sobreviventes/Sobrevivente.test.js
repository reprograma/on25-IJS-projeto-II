const Sobrevivente = require("./Sobrevivente.js");

describe("Teste da classe sobrevivente", ()=> {

  let sobrevivente1;
  let sobrevivente2;
  let sobrevivente3;
  let sobrevivente4;

  beforeEach(() => {
     sobrevivente1 = new Sobrevivente("Lulinha");
     sobrevivente2 = new Sobrevivente("Boulinhos");
     sobrevivente3 = new Sobrevivente("Haddadinho");
     sobrevivente4 = new Sobrevivente("Orlandinho");
    });
  

  it("Verifica se a classe está instaciada corretamente",() => {
    const sobrevivente = new Sobrevivente();
    expect(sobrevivente).toBeInstanceOf(Sobrevivente);
  });

 
   it("Verifica se retorna o nome do sobrevivente", () => {
    
    expect(sobrevivente1.nome).toEqual("Lulinha");
    expect(sobrevivente2.nome).toEqual("Boulinhos");
  });

  it("Verifica se inicia com ferimento igual a zero", () => {
   
    expect(sobrevivente1.ferimentos).toEqual(0);
    expect(sobrevivente2.ferimentos).toEqual(0);
    expect(sobrevivente3.ferimentos).toEqual(0);
    expect(sobrevivente4.ferimentos).toEqual(0);
  });
  
  it("Verifica sobrevivente vivo, se a condição é verdadeira", () => {
    expect(sobrevivente1.vivo).toBe(true)
  });

  it("Verifica se vivo retorna falso, após limite de ferimentos", () => {
    sobrevivente1.sofrerFerimentos();
    sobrevivente1.sofrerFerimentos();
    sobrevivente1.sofrerFerimentos();
    expect(sobrevivente1.vivo).toBe(false);
  });

  it("Verifica se ferimentos são adicionados corretamente", () => {
    sobrevivente1.sofrerFerimentos();
    sobrevivente2.sofrerFerimentos();
    
    expect(sobrevivente1.ferimentos).toEqual(1);
    expect(sobrevivente2.ferimentos).toEqual(1);
    
  });

  it("verifica se eliminar Zumbi adiciona ferimentos corretamente", () => {
    sobrevivente1.eliminarZumbi();
    expect(sobrevivente1.pontuacao).toEqual(1);
  }); 

});