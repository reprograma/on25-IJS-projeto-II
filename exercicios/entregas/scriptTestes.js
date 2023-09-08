const { Partida } = require('./Partida');
const { Sobrevivente } = require('./Sobrevivente');
const { Zumbi } = require('./Zumbi');

// Partida 1:
console.log("#### Partida 1 ####");
const partida = new Partida();
const sobrevivente1 = new Sobrevivente("Daphne", partida);
const sobrevivente2 = new Sobrevivente("Velma", partida);

partida.addSobrevivente(sobrevivente1);
partida.addSobrevivente(sobrevivente2);
partida.registro.addEvento(`${sobrevivente1.nome} e ${sobrevivente2.nome} foram adicionados à partida.`);

partida.addZumbis();
partida.registro.addEvento('Zumbis foram adicionados na partida.');

partida.listarSobreviventes();

sobrevivente1.realizarAcao();
sobrevivente2.realizarAcao();
sobrevivente1.equipamentos.addEquipamento('combate', 'martelo');

console.log(sobrevivente1.equipamentos.equipamentosCarregados);
console.log(sobrevivente1.equipamentos.equipamentosCarregados);

sobrevivente1.addFerimento();
partida.finalizarPartida();
console.log(`Data de fim: ${partida.fim}`);
console.log("Eventos da partida:");
partida.registro.listarEventos();

// Partida 2:
console.log("\n#### Partida 2 ####");
const partida2 = new Partida();
const sobrevivente3 = new Sobrevivente("Lilo", partida2);
const sobrevivente4 = new Sobrevivente("Stitch", partida2);

partida2.addSobrevivente(sobrevivente3);
partida2.addSobrevivente(sobrevivente4);
partida2.addZumbis();
partida2.listarSobreviventes();

sobrevivente3.realizarAcao();
sobrevivente3.realizarAcao();

sobrevivente4.equipamentos.addEquipamento('combate', 'faca');
sobrevivente4.equipamentos.addEquipamento('combate', 'arco e flecha');
sobrevivente4.equipamentos.addEquipamento('combate', 'rifle');
sobrevivente4.equipamentos.removerEquipamento('combate', 'rifle');

const equipamentosFormatados = sobrevivente4.equipamentos.equipamentosCarregados.map(equipamento => `- ${equipamento.tipo}: ${equipamento.equipamento}`);
const equipamentosString = equipamentosFormatados.join('\n');
console.log(`Equipamentos do ${sobrevivente4.nome}:\n${equipamentosString}`);

console.log(`Experiência atual de ${sobrevivente3.nome}: ${sobrevivente3.experiencia}`);
sobrevivente3.ganharExperiencia(4);

partida2.finalizarPartida();
