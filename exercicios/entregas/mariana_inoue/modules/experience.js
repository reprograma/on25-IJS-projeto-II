import  LevelStage  from "./constants/LevelStage";

export class Experience {
    points

    constructor(points,levelStage) {
        if(!(levelStage instanceof LevelStage)){
            return new Error('Erro')
        }
        this.points = points
        this.levelStage = levelStage
    }

    increaseExperience() {
        this.points += 1

        switch (points) {
            case points === 0:
                LevelStage.BLUE
                console.log("AZUL");
                break;
            case points >= 6:
                LevelStage.YELLOW
                console.log("AMARELO");
                break;
            case points >= 18:
                LevelStage.ORANGE
                console.log("ORANGE");
                break;
            case points >= 42:
                LevelStage.RED
                console.log("RED");
                break;
            default:
                console.log("Level desconhecido");
        }

        console.log(`O seu nivel é' ${this.points}`)

    }

    decreaseExperience() {
        return this.points -= 1
    }




}


const points1 = new Experience(0)