 
class Zumbi {
    nome;
    vivo = true;
    
    static ferimentos = [];

    constructor(nome) {
        this.nome = nome;
        this.ferimentos = 0;

        Zumbi.ferimentos.push(this);
    }

    sofrerFerimentos() {
        if (this.ferimentos === 0 || this.ferimentos < 1) {
            this.ferimentos++;
            return console.log(`${this.nome} você agora tem ${this.ferimentos} ferimentos`);
        }else {
           
         console.log(`${this.nome} você acaba de morrer no jogo...`);
         return this.vivo = false;
            
        }

    }

}

const zumbi1 = new Zumbi("Genocida");
const zumbi2 = new Zumbi("Temeroso");
const zumbi3 = new Zumbi("ZeroUm");
const zumbi4 = new Zumbi("ZeroDois");
const zumbi5 = new Zumbi("ZeroTres");
const zumbi6 = new Zumbi("ZeroQuatro");
const zumbi7 = new Zumbi("Micheque");

console.log(zumbi1);

zumbi1.sofrerFerimentos();
zumbi1.sofrerFerimentos();
zumbi2.sofrerFerimentos();
zumbi3.sofrerFerimentos();
zumbi4.sofrerFerimentos();
zumbi5.sofrerFerimentos();
zumbi6.sofrerFerimentos();
zumbi7.sofrerFerimentos();

console.log(zumbi1);
console.log(zumbi1.vivo);





module.exports = Zumbi;