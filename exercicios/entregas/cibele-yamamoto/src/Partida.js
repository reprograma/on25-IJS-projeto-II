class Partida {
    sobreviventes; // array com os sobreviventes da partida;
    nivelDificuldade;

    constructor(sobreviventes) {
        this.sobreviventes = sobreviventes;
        this.nivelDificuldade = this.calcNivelDificuldade(sobreviventes);

    }

    calcNivelDiviculdade(sobreviventes) {
        pass;
        // Ler o nível de dificuldade de cada sobrevivente da partira e retornar o nível mais alto
    }
}


/*
===>Cada partida inclui no **mínimo 1 sobrevivente;**  
===>Novos sobreviventes podem ser adicionados a qualquer momento da partida. 
===>Caso todos os sobreviventes morram, a partida será terminada.
===> If ferimento + 1, capacidade carregar equip sobrevivente -1
===> Cada vez que o sobrevivente **mata um zumbi, ele ganha 1 ponto de experiência**
===> **O JOGO PODE ACABAR QUANDO UM SOBREVIVENTE CHEGA NO 150**
===> registros
O jogo inclui um histórico contínuo de eventos que ocorreram à medida que foi jogado. 
    Registros relevantes:
    - A hora em que a partida começou;
    - Novo sobrevivente adicionado à partida;
    - Sobrevivente adquire um Equipamento.
    - Sobrevivente sofre um ferido.
    - Sobrevivente morre.
    - Sobe de nível.
    - O nível do partida muda.
    - Partida finalizada.
    - Um sobrevivente adquire uma nova habilidade.

    
===> Cada zumbi pode realizar 1 ação por turno.
===> Cada partida inicia com 2 zumbis para cada sobrevivente existente no jogo.
===>A cada rodada são adicionados novos zumbis de acordo com o nível do jogo.
*/