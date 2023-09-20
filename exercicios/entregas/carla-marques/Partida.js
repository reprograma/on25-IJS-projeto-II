class Partida{
    static sobreviventes = [];
    static zumbis = [];
    static rodada = 0;
    static vencedor = null;
    static fim = false; 
    addSobrevivente(sobrevivente){
        Partida.sobreviventes.push(sobrevivente);
    }
    addZumbi(zumbi){
        Partida.zumbis.push(zumbi);
    } 

}

module.exports = Partida;