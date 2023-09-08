class Game {
  constructor() {
    this.survivors = [];
    this.difficulty = "Azul";
    this.records = [];
  }

  addSurvivor(survivor) {
    this.survivors.push(survivor);
  }

  removeSurvivor(survivor) {
    const index = this.survivors.indexOf(survivor);
    if (index !== -1) {
      this.survivors.splice(index, 1);
    }
  }

  updateDifficulty() {
    const maxLevelSurvivor = Math.max(
      ...this.survivors.map((survivor) => survivor.level)
    );
    this.difficulty = maxLevelSurvivor;
  }

  logEvent(event) {
    this.records.push(event);
  }

  endGame() {
    // Handle game ending
  }
}

module.exports = { Game };
