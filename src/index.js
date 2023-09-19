import Sobreviventes from './sobreviventes.js';
import Equipamento from './equipamentos.js'
import Habilidade from './habilidades.js';

const sobrevivente1 = new Sobreviventes('Maria');
const bastao = new Equipamento('bastão de baseball');

sobrevivente1.equipar(bastao);
sobrevivente1.adquirirHabilidade('+1 Dano');

console.log(sobrevivente1);