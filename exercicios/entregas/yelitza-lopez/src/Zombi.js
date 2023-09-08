const {Survivor} = require('./Survivor');

class Zombi{
    woundsCountZombie;
    actions;
    level;
    MAX_ZOMBIE_WOUNDS = 2;

    constructor(level){
        this.level = level;
        this.woundsCountZombie = 0;
        this.actions = 1;
    }


    hitSurvivor(){
        if(this.actions > 0){
            this.actions--
            Survivor.prototype.injuredSurvivor()
            return 'Sobrevivente ferido!'
        }else{
            return 'Sem ações!'
        }
    }

    injuredZombie(){
        this.woundsCountZombie += 1
        if(this.woundsCountZombie >= this.MAX_ZOMBIE_WOUNDS){
            return 'o Zombie morreu!'
        }
    }
}

module.exports = {Zombi}