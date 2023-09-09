// Os sobreviventes podem usar equipamentos para ajudá-los em sua missão. 
// Cada sobrevivente pode carregar até 7 equipamentos no total, 
// 2 equipamentos transportados em mãos e o resto em reserva. 
// Equipamentos podem ser itens utilizados para lutar, como:
// 

/*A cada ferimento sofrido, o número de equipamentos que o sobrevivente pode carregar é reduzido em 1. 
Se o sobrevivente tiver mais equipamentos do que sua nova capacidade, ele deve descartar um deles.*/

export const EQUIPAMENTOS_LUTA = {
  bastaoBaseball,
  frigideira,
  machado,
  pistola,
}


export const UTILITARIOS = {
    garrafaDeAgua,
    comida,
    kitPrimeirosSocorros,
}


module.exports = { EQUIPAMENTOS_LUTA, UTILITARIOS};