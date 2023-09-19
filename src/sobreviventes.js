import Habilidade from './habilidades.js';

class Sobreviventes{
    nome;
   
    constructor(nome) {
      this.nome = nome;
      this.ferimentos = 0;
      this.acaoPorTurno = 3;
      this.equipamentosEmMaos = [];
      this.equipamentosEmReserva = [];
      this.experiencia = 0;
     this.habilidades = new Habilidade();
    }
   
   // verifica se o sobrevivente sofreu um ferimento e, se ele tiver 3 ferimentos, morre. 
   sofrerFerimento() {
      if (this.ferimentos < 3) {
        this.ferimentos++;
        // Reduz a capacidade de equipamentos em 1 a cada ferimento.
        this.atualizarCapacidadeEquipamentos();
        if (this.ferimentos === 3) {
          // Se sofrer 3 ferimentos, o sobrevivente morre.
          console.log(`${this.nome} morreu!`);
        }
      }
    }
   
   atualizarCapacidadeEquipamentos() {
      // Reduz a capacidade de equipamentos com base nos ferimentos.
      const capacidadeMaxima = 7 - this.ferimentos;
      if (this.equipamentosEmMaos.length > capacidadeMaxima) {
        const equipamentoDescartado = this.equipamentosEmMaos.pop();
        console.log(`${this.nome} descartou ${equipamentoDescartado.nome}`);
      }
    }

    equipar(equipamento) {
        if (this.equipamentosEmMaos.length < 2) {
          this.equipamentosEmMaos.push(equipamento);
        } else {
          this.equipamentosEmReserva.push(equipamento);
        }
      }
    
      adquirirHabilidade(habilidade) {
        this.habilidades.desbloquearHabilidade(habilidade);
      }
   }

   export default Sobreviventes;