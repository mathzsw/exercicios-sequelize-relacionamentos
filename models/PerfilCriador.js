const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const PerfilCriador = sequelize.define('PerfilCriador', {
  bio: {
    type: DataTypes.STRING
  },
  fotoUrl: {
    type: DataTypes.STRING
  },
  linkRedeSocial: {
    type: DataTypes.STRING
  }
});

module.exports = PerfilCriador;
