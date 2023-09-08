let { Level } = require('./Level')

class Skill {
    skillTree;
    potencialSkills = ['+1 Dano',
        'Tesouro escondido',
        '+1 Ação de Movimento',
        '+1 equipamento em mãos',
        '+1 vida'];
    unlockedSkills = ['+1 Ação'];

    skills() {
        switch (this.level) {
            case 'Yellow':
                this.skillTree = 1;
                break;
            case 'Orange':
                this.skillTree = 2;
                break;
            case 'Red':
                this.skillTree = 3;
                break;
        }
    }

    unlockedSkills() {
        if (this.level === 'Yellow') {
            this.skillTree.push(unlockedSkills[0]);
        }
    }
}

module.exports = { Skill }