class Zumbi {
    nome;
    ferimentos;

    constructor(nome) {
        this.nome = nome;
        this.ferimentos = 0;
    }
}

/*
===> Se um zumbi sofre 2 ferimentos, ele morre imediatamente; 
quaisquer ferimentos adicionais serão ignorados. 

===>Cada zumbi tem uma chance de acertar o ferimento no sobrevivente, que aumenta de acordo 
com o nível do jogo.
#### Ataque
⛔ **Níveis:**
- Nível 1: 1 zumbi por rodada, chance de 30% de acerto do ataque zumbi.
- Nível 2: 2 zumbis por rodada, chance de 50% de acerto do ataque zumbi.
- Nível 3: 3 zumbis por rodada, chance de 70% de acerto do ataque zumbi.
- Nível 4: 4 zumbis por rodada, chance de 100% de acerto do ataque zumbi.
*/