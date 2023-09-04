export class Zombie{
    die 
    constructor(die){
        this.die = die
    }

     
    attackSurviver(){
        this.injuries++
    }
}

const zombie1 = new Zombie(true)

console.log(zombie1)

