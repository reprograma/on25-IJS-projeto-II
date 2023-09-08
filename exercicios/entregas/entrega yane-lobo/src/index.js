const Survivor = require('./Survivor');
const Equipment = require('./Equipment');
const Game = require('./Game');

const survivor1 = new Survivor("Wheein");
const equipment1 = new Equipment("Baseball Bat");
const game = new Game();

survivor1.addEquipment(equipment1);

game.addSurvivor(survivor1);

game.addZombies();

survivor1.sufferInjury();
survivor1.sufferInjury();
survivor1.sufferInjury();

console.log(game);





