class Survivor {
    name;
    totalInjuries;
    actions = 3;
    equipment = {};
    level = '';
    experience = 0;
    skillTree = [];

    static allSurvivors = [];

    constructor(name){
        this.name = name;
        this.totalInjuries = 0;
        this.constructor.allSurvivors.push({survivor: this.survivor})
    }
}