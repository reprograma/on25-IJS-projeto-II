class Habilidade {
    constructor() {
      this.habilidadesPotenciais = [
        '+1 Dano',
        'Tesouro escondido',
        '+1 Ação de Movimento',
        '+1 equipamento em mãos',
        '+1 vida'
      ];
      this.habilidadesDesbloqueadas = [];
    }
  
    desbloquearHabilidade(habilidade) {
      if (this.habilidadesPotenciais.includes(habilidade)) {
        this.habilidadesDesbloqueadas.push(habilidade);
        console.log(`Nova habilidade desbloqueada: ${habilidade}`);
      }
    }
  }

  export default Habilidade;