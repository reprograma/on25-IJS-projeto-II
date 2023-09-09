class Nivel {
    nome;
    xpIncial;
    xpFinal;
    qtdHabilidadePotencial;
    habilidades;


    constructor(nivel, nome, xpInicial, xpFinal, qtdHabilidadePotencial) {
        this.nivel = nivel;
        this.nome = nome;
        this.xpInicial = xpInicial;
        this.xpFinal = xpFinal;
        this.qtdHabilidadePotencial = qtdHabilidadePotencial;
        this.habilidades = habilidades;
    }

}

/*
===> Quando um sobrevivente avança além de 43 de experiência, ele permanece no Nível Vermelho, mas 
reinicia pela árvore de habilidades uma segunda vez:

- Ao atingir o Amarelo novamente (43 + 7 = 50 no total), não há mais habilidades em potencial disponíveis.
- Ao chegar a Laranja novamente (43 + 18 = 61 no total), uma segunda habilidade Laranja é desbloqueada.
- Ao alcançar Azul novamente (43 + 43 = 86 no total), uma segunda habilidade Vermelha é desbloqueada.
- Um sobrevivente pode reiniciar a árvore uma segunda vez, desbloqueando sua última habilidade Vermelha com (**43 + 43 + 43 = 129 no total**) de experiência.
*/

