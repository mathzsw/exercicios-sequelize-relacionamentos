const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Criador = sequelize.define('Criador', {
  nome: {
    type: DataTypes.STRING
  },
  nomeUsuario: {
    type: DataTypes.STRING
  },
  seguidores: {
    type: DataTypes.INTEGER
  }
});

module.exports = Criador;
