const { Survivor } = require("./Survivor")
// const { SkillTree } = require("./resolucao")
const { Gear } = require("./Gear")



let brena = new Survivor ("brena")
console.log(Survivor.allSurvivors)
let raquel = new Survivor("raquel")
console.log(Survivor.allSurvivors)
console.log("--------------")
console.log(brena.isAlive())
console.log("--------------")
console.log(brena.isHarmed())
console.log(brena.isHarmed())
console.log(brena.isHarmed())
console.log("--------------")
console.log(brena.isAlive())
console.log(Survivor.allSurvivors)
console.log("--------------")
let brenaGear = new Gear
brenaGear.addGear('baseball bat')
console.log(brenaGear.gear)
console.log("--------------")