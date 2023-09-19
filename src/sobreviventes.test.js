import Sobreviventes from './sobreviventes.js';

describe('Sobreviventes', () => {
  let sobrevivente;

  beforeEach(() => {
    sobrevivente = new Sobreviventes('Ana');
  });

  it('deve criar um sobrevivente com os valores iniciais corretos', () => {
    expect(sobrevivente.nome).toBe('Ana');
    expect(sobrevivente.ferimentos).toBe(0);
    expect(sobrevivente.acaoPorTurno).toBe(3);
   
  });

  it('deve sofrer um ferimento corretamente', () => {
    sobrevivente.sofrerFerimento();
    expect(sobrevivente.ferimentos).toBe(1);
   
  });

  it('deve atualizar a capacidade de equipamentos corretamente', () => {
    sobrevivente.equipamentosEmMaos = [{ nome: 'Espada' }, { nome: 'Escudo' }];
    
    sobrevivente.ferimentos = 2;  
    sobrevivente.atualizarCapacidadeEquipamentos();
    expect(sobrevivente.equipamentosEmMaos).toHaveLength(2); 
  });
  

});


  