import { LevelsPoints } from "./constants.js";

export class Experience extends LevelsPoints {
    points = 0
    // constructor.points) {
    //     super()

    // }

    attackZombie(zombie) {

        if (zombie === true) {
            this.points++
            console.log(`You heat the zombie, now you have ${this.points}`)
console.log(Experience.RED)

        } else {
            console.log(`Run run and be quiet!`)
        }
    }




    surviverLevelUp() {
        let levelUp = this.points
        switch (levelUp) {
            case levelUp === Experience.BLUE && levelUp <= 6:
                // levelUp >= Experience.BLUE && levelUp <= 6
                Experience.BLUE
                console.log(this.points)
                console.log('Points are not sufficient to levelup');
                break;
            case 'YELLOW':
                this.points >= Experience.YELLOW && this.points <= 18
                console.log(`Your LEVEL is ${Experience.YELLOW} and there ${this.points} points saved`);
                console.log(Experience.YELLOW)
                break;
            case 'ORANGE':
                Experience.ORANGE ? this.points = 2 : undefined
                console.log(`Your LEVEL is ${Experience.ORANGE} and there ${this.points} points saved`);
                break;
            case 'RED':
                Experience.RED ? this.points = 3 : undefined
                console.log(`Your LEVEL is ${Experience.RED} and there ${this.points} points saved`);
                break;
            default:
                console.log('What is your level?')
                console.log(levelUp)
                break;
        }
    }
}

const surviverLevel = new Experience()


surviverLevel.attackZombie(true)
surviverLevel.attackZombie(true)
// surviverLevel.attackZombie(true)
// surviverLevel.attackZombie(true)
// surviverLevel.attackZombie(true)
// surviverLevel.attackZombie(true)
// surviverLevel.attackZombie(true)
// surviverLevel.attackZombie(true)
console.log(surviverLevel)
surviverLevel.surviverLevelUp('YELLOW')