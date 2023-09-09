const Zumbi = require("./Zumbi.js");

describe("Teste da classe sobrevivente", ()=> {

  let zumbi1;
  let zumbi2;
  let zumbi3;
  let zumbi4;
  let zumbi5;
  let zumbi6;
  let zumbi7;

  
  beforeEach(() => {
     zumbi1 = new Zumbi("Genocida");
     zumbi2 = new Zumbi("Temeroso");
     zumbi3 = new Zumbi("ZeroUm");
     zumbi4 = new Zumbi("ZeroDois");
     zumbi5 = new Zumbi("ZeroTres");
     zumbi6 = new Zumbi("ZeroQuatro");
     zumbi7 = new Zumbi("Micheque");
    });
  

  it("Verifica se a classe está instaciada corretamente",() => {
    const zumbi = new Zumbi();
    expect(zumbi).toBeInstanceOf(Zumbi);
  });

 
   it("Verifica se retorna o nome do zumbi", () => {
    
    expect(zumbi1.nome).toEqual("Genocida");
    expect(zumbi2.nome).toEqual("Temeroso");
    expect(zumbi3.nome).toEqual("ZeroUm");
    expect(zumbi4.nome).toEqual("ZeroDois");
    expect(zumbi5.nome).toEqual("ZeroTres");
    expect(zumbi6.nome).toEqual("ZeroQuatro");
    expect(zumbi7.nome).toEqual("Micheque");

  });

  it("Verifica se zumbi inicia com ferimento igual a zero", () => {
   
    expect( zumbi1.ferimentos).toEqual(0);
    expect( zumbi2.ferimentos).toEqual(0);
  });

  it("Verifica zumbi vivo, se a condição é verdadeira", () => {
    expect(zumbi1.vivo).toBe(true)
    expect(zumbi2.vivo).toBe(true)
  });

  it("Verifica se vivo retorna falso, após limite de ferimentos", () => {
    zumbi1.sofrerFerimentos();
    zumbi1.sofrerFerimentos();

    zumbi2.sofrerFerimentos();
    zumbi2.sofrerFerimentos();
    
    expect(zumbi1.vivo).toBe(false);
    expect(zumbi2.vivo).toBe(false);
  });

  it("Verifica se ferimentos são adicionados corretamente", () => {
    zumbi1.sofrerFerimentos();
    zumbi2.sofrerFerimentos();
    
    expect(zumbi1.ferimentos).toEqual(1);
    expect(zumbi2.ferimentos).toEqual(1);
  
  });

  
    

});