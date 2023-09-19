const { Zombie } = require('./zombie');

class Sobrevivente {
	constructor(nome) {
		this.nome = nome;
		this.ferimentos = 0;
		this.acoesTurno = 3;
		this.equipamentos = {
			maos: [],
			reserva: []
		};
		this.experiencia = 0;
		this.nivel = 'Azul';
	}

	fazerBarulho() {
		console.log('Sobrevivente tenta chamar atenção dos Zumbis');
		this.acoesTurno--;
	}

	atualizarCapacidadeEquipamentos() {
		const capacidadeMaxima = 7 - this.ferimentos;
		if (this.equipamentosMaos.length >= 2) {
			this.equipamentosReserva.push(this.equipamentosMaos.pop());
		}
		while (this.equipamentosReserva.length > capacidadeMaxima - this.equipamentosMaos.length) {
			this.equipamentosReserva.pop();
		}
	}

	ganharExperiencia() {
		this.experiencia++;
		if (this.experiencia >= 6 && this.nivel === 'Azul') {
			this.nivel = 'Amarelo';
			this.acoesTurno++;
		}
		if (this.experiencia >= 18 && this.nivel === 'Amarelo') {
			this.nivel = 'Laranja';
			this.equipamentos.reserva.push('machado');
		}
		if (this.experiencia >= 42 && this.nivel === 'Laranja') {
			this.nivel = 'Vermelho';
			this.ferimentos--;
		}
		if (this.experiencia >= 61) {
			this.equipamentos.reserva.push('garrafa de água');
		}
		if (this.experiencia >= 86) {
			this.ferimentos--;
		}
		if (this.experiencia >= 129) {
			this.ferimentos--;
			this.equipamentos.reserva.push('frigideira');
		}
		if (this.experiencia >= 150) {
			console.log('Parabéns você venceu essa partida');
		}
	}

	sofrerFerimento() {
		const itensUtilitarios = ['garrafa de água', 'comida', 'kit de primeiros socorros'];
		if (this.ferimentos < 3) {
			for (const item of this.equipamentos.reserva) {
				if (itensUtilitarios.includes(item)) {
					this.equipamentos.reserva.pop(item);
				} else {
					this.ferimentos++;
					this.atualizarCapacidadeEquipamentos();
					return 'Ok';
				}
			}
		}
		if (this.ferimentos >= 3) {
			this.ferimentos = 3;
			console.log('Sobrevivente morreu...');
			this.equipamentos.length = 0;
			return 'Ok';
		}
	}

	buscarItem() {
		const itens = [
			'Bastão de Baseball',
			'frigideira',
			'machado',
			'pistola',
			'garrafa de água',
			'comida',
			'kit de primeiros socorros'
		];
		const indiceAleatorio = Math.floor(Math.random() * itens.length);
		const itensAleatorio = itens[indiceAleatorio];
		if (this.acoesTurno > 0) {
			if (this.equipamentos.maos.length >= 2 && this.equipamentos.reserva.length < 5) {
				this.equipamentos.reserva.push(this.equipamentos.maos.pop());
				this.equipamentos.maos.push(itensAleatorio);
				this.acoesTurno--;
				return 'Ok';
			}
			if (this.equipamentos.maos.length < 2) {
				this.equipamentos.maos.push(itensAleatorio);
				this.acoesTurno--;
				return 'Ok';
			}
			if (this.equipamentos.maos.length >= 2 && this.equipamentos.reserva.length >= 5) {
				console.log('Você não possui capacidade dispoivél para pegar novos itens, descarte um item');
				this.acoesTurno--;
				return 'Ok';
			}
		} else {
			console.log('sobrevivente não possui ações restantes');
		}
	}

	matarZumbi() {
		const itensDeAtaque = ['Bastão de Baseball', 'pistola', 'machado', 'frigideira'];
		let ataqueBemSucedido = false;
		const zombie = new Zombie();

		for (const item of this.equipamentos.maos) {
			if (itensDeAtaque.includes(item)) {
				console.log('O sobrevivente ataca com ' + item);
				zombie.sofrerFerimento();
				this.ganharExperiencia();
				ataqueBemSucedido = true;
				this.acoesTurno--;
				break;
			}
		}
		if (!ataqueBemSucedido) {
			for (const item of this.equipamentos.reserva) {
				if (itensDeAtaque.includes(item)) {
					console.log('O sobrevivente ataca com ' + item);
					zombie.sofrerFerimento();
					this.ganharExperiencia();
					ataqueBemSucedido = true;
					this.acoesTurno--;
					break;
				}
			}
		}
		if (!ataqueBemSucedido) {
			console.log('O sobrevivente não possui itens de ataque, ele foi atacado');
			this.sofrerFerimento();
			this.acoesTurno--;
			return 'Not Ok';
		}
		return 'Atk ok';
	}

	acaoMover() {
		this.acoesTurno--;
		const zombie = ['not', 'yes'];
		const indiceAleatorio = Math.floor(Math.random() * zombie.length);
		const itemAleatorio = zombie[indiceAleatorio];
		if (itemAleatorio == 'yes') {
			this.matarZumbi();
			this.buscarItem();
			return 'Ok';
		}
		if (itemAleatorio == 'not') {
			this.fazerBarulho();
			this.buscarItem();
			return 'Ok';
		}
	}

	novoTurno() {
		this.acoesTurno = 3;
		return 'Ok';
	}
}

module.exports = { Sobrevivente };
