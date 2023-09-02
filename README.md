<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 21 - Imersão JavaScript | Semana 11 | 2022 | Professora: [Luara Kerlen](https://github.com/luarakerlen)

### Instruções

Antes de começar, vamos organizar nosso setup.

- Fork esse repositório
- Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
- Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)

### Objetivo

Criar um projeto prático utilizando os conceitos de SOLID e Clean Code.

### Resumo

O que veremos na aula de hoje?

- [Tema da Aula](#tema-da-aula)

  - [Instruções](#instruções)
  - [Objetivo](#objetivo)
  - [Resumo](#resumo)

- [Conteúdo](#conteúdo)

  - [Desafio](#desafio)

    - [Sobreviventes](#sobreviventes)
    - [Equipamentos](#equipamentos)
    - [Partidas](#partidas)
    - [Experiência e Níveis](#experiência-e-níveis)
    - [Árvore de Habilidades](#árvore-de-habilidades)
    - [Registros](#registros)

  - [Extras](#extras)

    - [Zumbis](#zumbis)
    - [Partidas com zumbis](#partidas-com-zumbis)
    - [Ataque](#ataque)

  - [Exercícios](#exercícios)
  - [Material da aula](#material-da-aula)
  - [Links Úteis](#links-úteis)

# Conteúdo
Link do jogo Zombicide: https://www.youtube.com/watch?v=sVo-SRAZYOA

## Desafio

O apocalipse zumbi ocorreu! Esse é o cenário do jogo de tabuleiro que você é responsável por desenvolver. Inicialmente você deve entregar um protótipo que contemple as principais regras do jogo. Leia cada um dos blocos a seguir e implemente o jogo seguindo as melhores práticas.

#### Sobreviventes

Os sobrevivente deste mundo cruel são nossos lutadores. Às vezes, eles se machucam e até morrem. Cada sobrevivente tem um **nome** e **inicia o jogo com um total de 0 ferimentos**. Se um sobrevivente sofre **3 ferimentos**, **ele morre imediatamente; quaisquer ferimentos adicionais serão ignorados.** Cada sobrevivente começa com a habilidade de realizar 3 ações por turno.

Cada Sobrevivente começa com uma Árvore de Habilidades.

#### Equipamentos

Os sobreviventes podem usar equipamentos para ajudá-los em sua missão. Cada sobrevivente pode **carregar até 7 equipamentos no total**, 2 equipamentos transportados em **mãos** e o resto em **reserva**.
Equipamentos podem ser **itens utilizados para lutar,** como:
- bastão de baseball,
- frigideira,
- machado,
- pistola;

ou itens utilitários, como:
- garrafa de água,
- comida,
- kit de primeiros socorros.

> ⛔ A cada ferimento sofrido, o número de equipamentos que o sobrevivente pode carregar é reduzido em 1. Se o sobrevivente tiver mais equipamentos do que sua nova capacidade, ele deve descartar um deles.

#### Partidas
Cada partida inclui no **mínimo 1 sobrevivente;**  
Novos sobreviventes podem ser adicionados a qualquer momento da partida. Caso todos os sobreviventes morram, a partida será terminada.

A partida possui **níveis de dificuldade** (iguais os níveis dos sobreviventes), sendo que o nível da partida é sempre igual ao nível mais alto dentre os sobreviventes vivos.

#### Experiência e Níveis
À medida que os sobreviventes superam os zumbis, eles ganham experiência. 

Cada sobrevivente começa com **0 pontos de experiência** e possui um nível atual. O primeiro nível é o Azul. 

Os níveis consistem em: 

- Azul,
- Amarelo,
- Laranja,
- Vermelho.

⛔ Cada vez que o sobrevivente **mata um zumbi, ele ganha 1 ponto de experiência**, esses pontos são utilizados para subir de nível: 

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

No nível Amarelo, apenas a habilidade **+1 Ação** deve estar disponível, então ela será desbloqueada; um Sobrevivente que tenha **+1 Ação** deve ter uma ação adicional (total de 4). 

**Exemplos de habilidades potenciais**: 

- +1 Dano;
- Tesouro escondido (permite carregar mais um equipamento);

- +1 Ação de Movimento;
- +1 equipamento em mãos;
- +1 vida;

⛔ Quando um sobrevivente avança além de 43 de experiência, ele permanece no Nível Vermelho, mas reinicia pela árvore de habilidades uma segunda vez:

- Ao atingir o Amarelo novamente (43 + 7 = 50 no total), não há mais habilidades em potencial disponíveis.
- Ao chegar a Laranja novamente (43 + 18 = 61 no total), uma segunda habilidade Laranja é desbloqueada.
- Ao alcançar Azul novamente (43 + 43 = 86 no total), uma segunda habilidade Vermelha é desbloqueada.
- Um sobrevivente pode reiniciar a árvore uma segunda vez, desbloqueando sua última habilidade Vermelha com (**43 + 43 + 43 = 129 no total**) de experiência.

⛔ **O JOGO PODE ACABAR QUANDO UM SOBREVIVENTE CHEGA NO 150**

#### Registros
O jogo inclui um histórico contínuo de eventos que ocorreram à medida que foi jogado. Registros relevantes:

- A hora em que a partida começou;
- Novo sobrevivente adicionado à partida;
- Sobrevivente adquire um Equipamento.
- Sobrevivente sofre um ferido.
- Sobrevivente morre.
- Sobe de nível.
- O nível do partida muda.
- Partida finalizada.
- Um sobrevivente adquire uma nova habilidade.

## Extras
#### Zumbis
Cada zumbi inicia o jogo com um total de 0 ferimentos. Se um zumbi sofre 2 ferimentos, ele morre imediatamente; quaisquer ferimentos adicionais serão ignorados. Cada zumbi pode realizar 1 ação por turno.

#### Partidas com zumbis
Cada partida inicia com 2 zumbis para cada sobrevivente existente no jogo.

A cada rodada são adicionados novos zumbis de acordo com o nível do jogo.

Cada zumbi tem uma chance de acertar o ferimento no sobrevivente, que aumenta de acordo com o nível do jogo.

#### Ataque
⛔ **Níveis:**
- Nível 1: 1 zumbi por rodada, chance de 30% de acerto do ataque zumbi.
- Nível 2: 2 zumbis por rodada, chance de 50% de acerto do ataque zumbi.
- Nível 3: 3 zumbis por rodada, chance de 70% de acerto do ataque zumbi.
- Nível 4: 4 zumbis por rodada, chance de 100% de acerto do ataque zumbi.

**O sobrevivente sempre acerta o ferimento e ganha 1 ponto de experiência quando mata um zumbi.**,

---

### Exercícios

- [Exercicio](/exercicios/)

### Material da aula

- [Material](/material)

### Links Úteis

- [Jogo Zombicide](https://www.youtube.com/watch?v=sVo-SRAZYOA)

### Contatos

- [LinkedIn](https://www.linkedin.com/in/luarakerlen/)
- [Github](https://github.com/luarakerlen)
- [Instagram](https://www.instagram.com/luaratech/)

<p align="center">
Desenvolvido com :purple_heart:  
</p>
