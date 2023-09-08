// export default class LevelStage {
//     static BLUE = 'BLUE';
//     static YELLOW = 'YELLOW' ;
//     static ORANGE = 'ORANGE';
//     static RED = 'RED';
//   }
import {LevelStage}  from "./constants.js";
export class Skill extends LevelStage{
    potentialSkills
    // constructor(potentialSkills) {
    //     super()
      
    // }

    unlockSkills(levelColor) {
        switch (levelColor) {
            case 'BLUE' :
                Skill.BLUE
                console.log('Potential skills are not available');
                break;
            case 'YELLOW':
                Skill.YELLOW ? this.potentialSkills = 1 : undefined
                console.log(`Your LEVEL is ${Skill.YELLOW} and there ${this.potentialSkills} potential skills available now`);
                console.log(Skill.YELLOW)
                break;
            case 'ORANGE':
                Skill.ORANGE ? this.potentialSkills = 2 : undefined
                console.log(`Your LEVEL is ${Skill.ORANGE} and there ${this.potentialSkills} potential skills available now`);
                break;
                case 'RED':
                    Skill.RED ?   this.potentialSkills = 3 : undefined
                    console.log(`Your LEVEL is ${Skill.RED} and there ${this.potentialSkills} potential skills available now`);
                    break;
            default:
                console.log('What is your level?')
                break;
        }
    }
}

const skillPlayer = new Skill()

// console.log(skillPlayer)

// //skillPlayer.unlockSkills(LevelStage.BLUE)

// console.log(skillPlayer)

// skillPlayer.unlockSkills(Skill.ORANGE)


skillPlayer.unlockSkills('YELLOW')
console.log(skillPlayer)

skillPlayer.unlockSkills('RED')
console.log(skillPlayer)