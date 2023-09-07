const { Survivor } = require("./Survivor")

class Gear extends Survivor {
    MAX_GEAR
    fightItems = ['baseball bat', 'pan', 'ax', 'gun'];
    utilityItems = ['water bottle', 'food', 'first aid kit'];
    gear = [];

    
    addGear(newGear) {
        if (this.fightItems.includes(newGear) || this.utilityItems.includes(newGear)) {
            this.gear.push(newGear);
        } else {
            console.log(`This item does not exist`);
        }

        if(this.gear.length > this.MAX_GEAR) {
            console.log(`You cannot carry anymore gear`)
        }
    } 

    survivorHarmed(){
        switch(this.harm){
            case 0:
                this.MAX_GEAR = 7;
                break;
            case 1:
                this.MAX_GEAR = 6;
                break;
            case 2:
                this.MAX_GEAR = 5;
                break;
        }
    }
}

module.exports = { Gear }