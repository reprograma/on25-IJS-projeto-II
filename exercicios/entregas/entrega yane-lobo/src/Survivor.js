class Survivor {
    constructor(name) {
      this.name = name;
      this.injuries = 0;
      this.level = "Blue";
      this.experience = 0;
      this.actionsPerTurn = 3;
      this.equipment = {
        inHand: [],
        inReserve: [],
      };
      this.alive = true;
    }
  
    sufferInjury() {
        if (this.alive) {
          this.injuries++;
          console.log(`${this.name} has suffered 1 damage.`);
          if (this.injuries >= 3) {
            this.die();
          }
        } else {
          console.log(`${this.name} is already dead.`);
        }
    }
  
    die() {
        this.alive = false;
        console.log(`${this.name} has died.`);
    }

    acquireExperience() {
      this.experience++;
      this.checkLevel();
    }
  
    checkLevel() {
        const levelThresholds = {
          Blue: 6,
          Yellow: 18,
          Orange: 42,
        };
      
        for (const [level, threshold] of Object.entries(levelThresholds)) {
          if (this.experience >= threshold && this.level === level) {
            this.level = this.getNextLevel(level);
            if (this.level === "Yellow") {
              this.actionsPerTurn++;
            }
            break;
          }
        }
        console.log(`Current level is: ${this.level}`)
    }
      
    getNextLevel(currentLevel) {
        const levels = ["Blue", "Yellow", "Orange"];
        const currentIndex = levels.indexOf(currentLevel);
        return currentIndex < levels.length - 1 ? levels[currentIndex + 1] : currentLevel;
    }
      
  
    addEquipment(equipment) {
      if (this.equipment.inHand.length + this.equipment.inReserve.length < this.calculateEquipmentCapacity()) {
        this.equipment.inHand.push(equipment);
      } else {
        console.log("Maximum equipment capacity reached.");
      }
    }
  
    calculateEquipmentCapacity() {
      return 2 - this.injuries;
    }
  }
  
  module.exports = Survivor;  