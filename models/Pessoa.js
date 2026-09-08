const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Pessoa = sequelize.define('Pessoa', {
  nome: {
    type: DataTypes.STRING
  }
});

module.exports = Pessoa;
