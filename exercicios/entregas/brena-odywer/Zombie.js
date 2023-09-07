class Zombie {
    constructor() {
      this.wounds = 0;
      this.actionsPerTurn = 1;
    }
  
    sufferWound() {
      if (this.wounds < 2) {
        this.wounds++;
        if (this.wounds === 2) {
          console.log(`A zombie has been killed.`);
        }
      }
    }
  }

  module.exports = { Zombie }