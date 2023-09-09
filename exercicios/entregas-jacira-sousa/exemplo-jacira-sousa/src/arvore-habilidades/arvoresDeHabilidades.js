/*

Árvore de Habilidades

À medida que o jogo avança, os sobreviventes melhoram.

Cada nível possui um conjunto diferente de habilidades. 
Essa relação entre níveis e habilidades é chamada de Árvore de Habilidades.

Cada Sobrevivente começa com uma Árvore de Habilidades.

Uma Árvore de Habilidades consiste em habilidades potenciais e habilidades desbloqueadas;:

    1 habilidade - nível Amarelo = +1 Ação de Movimento;
    2 habilidades - Laranja,
    3 habilidades - Vermelho.

Quando um Sobrevivente avança para um nível específico, 
ele pode desbloquear uma habilidade disponível desse nível.

No nível Amarelo, apenas a habilidade +1 Ação deve estar disponível, 
então ela será desbloqueada; um Sobrevivente que tenha +1 Ação deve ter uma ação adicional (total de 4).

Exemplos de habilidades potenciais:

    +1 Dano;

    Tesouro escondido (permite carregar mais um equipamento);

    +1 Ação de Movimento; - nivel amarelo

    +1 equipamento em mãos;

    +1 vida;

⛔ Quando um sobrevivente avança além de 43 de experiência, 
ele permanece no Nível Vermelho, mas reinicia pela árvore de habilidades uma segunda vez:

    Ao atingir o Amarelo novamente (43 + 7 = 50 no total), 
    não há mais habilidades em potencial disponíveis.
    Ao chegar a Laranja novamente (43 + 18 = 61 no total), 
    uma segunda habilidade Laranja é desbloqueada.
    Ao alcançar Azul novamente (43 + 43 = 86 no total), 
    uma segunda habilidade Vermelha é desbloqueada.
    Um sobrevivente pode reiniciar a árvore uma segunda vez, 
    desbloqueando sua última habilidade Vermelha com (43 + 43 + 43 = 129 no total) de experiência.

⛔ O JOGO PODE ACABAR QUANDO UM SOBREVIVENTE CHEGA NO 150
*/