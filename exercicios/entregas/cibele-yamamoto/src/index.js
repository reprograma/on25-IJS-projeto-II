const Sobrevivente = require('./Sobrevivente/Sobrevivente');
const Partida = require('./Partida/Partida');

const player1 = new Sobrevivente("player1");
const player2 = new Sobrevivente("player2");
const player3 = new Sobrevivente("player3");
const player4 = new Sobrevivente("player4");

/*
console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);
*/ 

let sobreviventes = [player1, player2, player3, player4];

const partida1 = new Partida(sobreviventes);

console.log(partida1)


/*

===> If ferminento + 1, capacidade carregar equip -1
> ⛔ A cada ferimento sofrido, o número de equipamentos que o sobrevivente pode carregar é reduzido em 1. Se o sobrevivente tiver 
mais equipamentos do que sua nova capacidade, ele deve descartar um deles.

#### Partidas
===>Cada partida inclui no **mínimo 1 sobrevivente;**  
===>Novos sobreviventes podem ser adicionados a qualquer momento da partida. 
===>Caso todos os sobreviventes morram, a partida será terminada.

A partida possui **níveis de dificuldade** (iguais os níveis dos sobreviventes), sendo que o nível da partida é sempre igual 
ao nível mais alto dentre os sobreviventes vivos.

#### Experiência e Níveis
À medida que os sobreviventes superam os zumbis, eles ganham experiência. 

Cada sobrevivente começa com **0 pontos de experiência** e possui um nível atual. O primeiro nível é o Azul. 

Os níveis consistem em: 

- Azul,
- Amarelo,
- Laranja,
- Vermelho.

===> Cada vez que o sobrevivente **mata um zumbi, ele ganha 1 ponto de experiência**, 

esses pontos são utilizados para subir de nível: 

- 6 pontos para sair do Azul e ir pro nível Amarelo;
- 18 para o nível Laranja;
- 42 para o nível Vermelho.

#### Árvore de Habilidades
À medida que o jogo avança, os sobreviventes melhoram. 

Cada nível possui um conjunto diferente de habilidades. Essa **relação entre níveis e habilidades é chamada de Árvore de Habilidades.** 

Cada Sobrevivente começa com uma Árvore de Habilidades. 

Uma Árvore de Habilidades consiste em habilidades potenciais e habilidades desbloqueadas;:

- 1 habilidade potencial no nível Amarelo,
- 2 habilidades potenciais no Laranja,
- 3 habilidades potenciais no Vermelho.

Quando um Sobrevivente avança para um nível específico, ele pode desbloquear uma habilidade disponível desse nível.

No nível Amarelo, apenas a habilidade **+1 Ação** deve estar disponível, então ela será desbloqueada; um Sobrevivente que 
tenha **+1 Ação** deve ter uma ação adicional (total de 4). 

**Exemplos de habilidades potenciais**: 

- +1 Dano;
- Tesouro escondido (permite carregar mais um equipamento);

- +1 Ação de Movimento;
- +1 equipamento em mãos;
- +1 vida;
*/


/* 
⛔
===> Quando um sobrevivente avança além de 43 de experiência, ele permanece no Nível Vermelho, mas 
reinicia pela árvore de habilidades uma segunda vez:

- Ao atingir o Amarelo novamente (43 + 7 = 50 no total), não há mais habilidades em potencial disponíveis.
- Ao chegar a Laranja novamente (43 + 18 = 61 no total), uma segunda habilidade Laranja é desbloqueada.
- Ao alcançar Azul novamente (43 + 43 = 86 no total), uma segunda habilidade Vermelha é desbloqueada.
- Um sobrevivente pode reiniciar a árvore uma segunda vez, desbloqueando sua última habilidade Vermelha com (**43 + 43 + 43 = 129 no total**) de experiência.


⛔
===> **O JOGO PODE ACABAR QUANDO UM SOBREVIVENTE CHEGA NO 150**


#### Partidas com zumbis
===> Cada partida inicia com 2 zumbis para cada sobrevivente existente no jogo.

===>A cada rodada são adicionados novos zumbis de acordo com o nível do jogo.

===>Cada zumbi tem uma chance de acertar o ferimento no sobrevivente, que aumenta de acordo 
com o nível do jogo.
#### Ataque
⛔ **Níveis:**
- Nível 1: 1 zumbi por rodada, chance de 30% de acerto do ataque zumbi.
- Nível 2: 2 zumbis por rodada, chance de 50% de acerto do ataque zumbi.
- Nível 3: 3 zumbis por rodada, chance de 70% de acerto do ataque zumbi.
- Nível 4: 4 zumbis por rodada, chance de 100% de acerto do ataque zumbi.

**O sobrevivente sempre acerta o ferimento e ganha 1 ponto de experiência quando mata um zumbi.**,
*/