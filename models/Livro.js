const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Livro = sequelize.define('Livro', {
  titulo: {
    type: DataTypes.STRING
  },
  anoPublicacao: {
    type: DataTypes.INTEGER
  }
});

module.exports = Livro;
