const Survivor = require("./Survivor");

const sobrevivente = new Survivor("nicole");
console.log(sobrevivente);
// sobrevivente.wounds(true);
// console.log(sobrevivente);

// sobrevivente.wounds(true);
// console.log(sobrevivente);

// sobrevivente.wounds(true);
// console.log(sobrevivente);

// sobrevivente.wounds(true);
// console.log(sobrevivente);

sobrevivente.myEquipments("bastão de baseball");
sobrevivente.myEquipments("frigideira");
sobrevivente.myEquipments("machado");
sobrevivente.myEquipments("pistola");
sobrevivente.myEquipments("garrafa de água");
sobrevivente.myEquipments("comida");
sobrevivente.myEquipments("kit primeiros socorros");
console.log(sobrevivente);

sobrevivente.chooseEquipment("bastão de baseball");
sobrevivente.chooseEquipment("tênis");
