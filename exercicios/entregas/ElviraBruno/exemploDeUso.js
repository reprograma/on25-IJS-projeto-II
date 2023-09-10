const { Sobrevivente } = require('./sobrevivente.js');
const { equipamento } = require('./equipamento.js');
const { experiencia } = require('./experiencia.js');
const { dano } = require('./dano.js');

const sobrevivente11 = new Sobrevivente("Negan");
sobrevivente11.adicionarExperiencia(5); // Adiciona 5 pontos de experiência (Azul)
sobrevivente11.adicionarExperiencia(12); // Adiciona 12 pontos de experiência (Amarelo)
sobrevivente11.adicionarExperiencia(24); // Adiciona 24 pontos de experiência (Laranja)
sobrevivente11.adicionarExperiencia(100); // Adiciona 100 pontos de experiência (Parabéns)
