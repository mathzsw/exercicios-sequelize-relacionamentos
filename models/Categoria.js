const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Categoria = sequelize.define('Categoria', {
  nome: {
    type: DataTypes.STRING
  }
});

module.exports = Categoria;
