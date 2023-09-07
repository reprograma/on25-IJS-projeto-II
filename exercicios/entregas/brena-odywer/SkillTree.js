const { Survivor } = require("./Survivor")

class SkillTree extends Survivor {
    skills

    getsSkills(){
    switch (experience) {
        case 'Yellow' :
            this.skils = 1
            break
        case 'Orange' :
            this.skils = 2
            break
        case 'Red' :
            this.skils = 3
            break
    
        }
    }
    
}

module.exports = { SkillTree }