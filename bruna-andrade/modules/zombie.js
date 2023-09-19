class Zombie {
	ferimentos = 0;
	zumbis = 2;

	sofrerFerimento() {
		if (this.ferimentos < 2 && this.zumbis >= 1) {
			this.ferimentos++;
		}
		if (this.ferimentos === 2 && this.zumbis >= 1) {
			console.log('Zombie morreu...');
			zumbis--;
		}
		if (this.zumbis == 0) {
			console.log('Parabéns você venceu');
		}
	}
}

module.exports = { Zombie };
