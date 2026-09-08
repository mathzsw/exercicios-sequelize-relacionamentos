const express = require('express');
const sequelize = require('./db');
const Pessoa = require('./models/Pessoa');
const Passaporte = require('./models/Passaporte');

require('./models/relacionamentosModels');

const app = express();
const PORT = 3000;

// Exercício 2 - cria uma Pessoa e seu Passaporte usando o método mágico
app.get('/exercicio2', async (req, res) => {
  try {
    const pessoa = await Pessoa.create({
      nome: 'Matheus'
    });

    await pessoa.createPassaporte({
      numero: 'BR123456',
      validade: '2030-12-31'
    });

    res.send('Pessoa e Passaporte criados com sucesso!');
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao criar Pessoa e Passaporte.');
  }
});

// Exercício 3 - busca uma Pessoa pelo ID trazendo seu Passaporte
app.get('/exercicio3', async (req, res) => {
  try {
    const pessoa = await Pessoa.findByPk(1, {
      include: {
        model: Passaporte,
        as: 'passaporte'
      }
    });

    console.log(pessoa ? pessoa.toJSON() : 'Pessoa não encontrada.');
    res.send('Consulta realizada. Veja o terminal.');
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao consultar Pessoa.');
  }
});

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((erro) => {
    console.error('Erro ao sincronizar o banco:', erro);
  });
