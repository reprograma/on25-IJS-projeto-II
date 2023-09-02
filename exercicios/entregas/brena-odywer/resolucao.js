class Survivor {
    name;
    harm = 0;
    experience = 0;

    static allSurvivors = [];

    constructor(name){
        this.name = name;
        this.constructor.allSurvivors.push({
            survivor: this.survivor
        })
    };

    isAlive () {
        if(this.harm >= 3) {
            return console.log (`${this.name} is dead`)
        } else {
            return console.log (`${this.name} is alive`)
        }
    };


}

class SkillTree extends Survivor {

}

class Gear extends Survivor {

}

module.exports = { Survivor, SkillTree, Gear }
