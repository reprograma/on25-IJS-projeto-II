class Sobrevivente {
  constructor(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.estaVivo = true;
    this.ferimentos = [];
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou do sexo ${this.sexo}.`;
  }

  marcarComoFalecido() {
    this.estaVivo = false;
  }

  adicionarFerimento(ferimento) {
    this.ferimentos.push(ferimento);
  }

  obterFerimentos() {
    return this.ferimentos;
  }
}

const sobrevivente1 = new Sobrevivente("João", 30, "Masculino");

console.log(sobrevivente1.apresentar());

sobrevivente1.adicionarFerimento("Perna quebrada");
sobrevivente1.adicionarFerimento("Ferimento na cabeça");

console.log("Ferimentos:", sobrevivente1.obterFerimentos());

sobrevivente1.marcarComoFalecido();

if (sobrevivente1.estaVivo) {
  console.log(`${sobrevivente1.nome} está vivo.`);
} else {
  console.log(`${sobrevivente1.nome} está falecido.`);
}
