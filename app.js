const express = require('express');
const sequelize = require('./db');
const Pessoa = require('./models/Pessoa');
const Passaporte = require('./models/Passaporte');

require('./models/relacionamentosModels');

const app = express();
const PORT = 3000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((erro) => {
    console.error('Erro ao sincronizar o banco:', erro);
  });
