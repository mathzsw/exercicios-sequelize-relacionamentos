const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Autor = sequelize.define('Autor', {
  nome: {
    type: DataTypes.STRING
  }
});

module.exports = Autor;
