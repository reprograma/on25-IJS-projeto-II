import { Character } from "./Character";
import { Survivor} from "./Survivor";

const game = new Game();
const survivor1 = new Survivor('Alice');
const survivor2 = new Survivor('Bob');
game.addCharacter(survivor1);
game.addCharacter(survivor2);

const zombie1 = new Zombie();
const zombie2 = new Zombie();
game.addCharacter(zombie1);
game.addCharacter(zombie2);
console.log(survivor1)