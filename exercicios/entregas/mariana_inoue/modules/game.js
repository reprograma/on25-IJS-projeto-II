import { Surviver } from "./surviver"

export class Game{
    surviver
    actions
    constructor(actions, surviver){
        if(!(surviver instanceof Surviver)){
           return new Error(`Sobrevivente nao encontrado }`)
        }
        this.actions = actions
        this.surviver = surviver
    }

    gameSet(){
        this.actions
    }

    gameLevel(){
        this.surviver.injuries
    }
}