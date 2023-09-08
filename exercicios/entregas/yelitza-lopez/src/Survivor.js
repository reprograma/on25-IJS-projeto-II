const {Weapons} = require("./Weapons");
const {Zombi} = require("./Zombi");


class Survivor {
    name;
    woundsCount;
    MAX_WOUNDS = 3;

    constructor(name){
        this.name = name;
        this.woundsCount = 0;
        this.availableActions = 3;
        this.skillTree = {
            'Amarelo': [],
            'Laranja': [],
            'Vermelho': []
        };
        this.weapons = new Weapons();
        this.experience = 0;
        this.level = 'Azul';

        }

    winExperience(){
        this.experience++;
        this.checkLevel();
    }

    checkLevel(){
        if(this.experience <= 6){
            this.unlockSkill()
            return this.level = 'Amarelo';
        }else if(this.experience <= 18){
            this.unlockSkill()
            return this.level = 'Laranja';
        }else if(this.experience <= 42){
            this.unlockSkill();
            return this.level = 'Vermelho';
        } 
    }

    unlockSkill(){
        if(this.level === 'Amarelo'){
            return this.skillTree += 1;
        }else if(this.level === 'Laranja'){
            return this.skillTree += 2;
        }else if(this.level === 'Vermelho'){
            return this.skillTree += 3;
        }
    }
    hitZombie(){
        if(this.availableActions > 0){
            this.availableActions -= 1;
            this.winExperience();
            Zombi.prototype.injuredZombie()
            return `${this.name} atacando Zombie!`
        }else{
            return `${this.name} não tem ações dispovíveis!`
        }
    }

    injuredSurvivor(){
        this.woundsCount++
        if(this.woundsCount >= this.MAX_WOUNDS){
            return this.turnZombie();
        }
    }

    turnZombie(){
        return `${this.name} agora é um Zombie!`
    }

    
}

module.exports = { Survivor };




