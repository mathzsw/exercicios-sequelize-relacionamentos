const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Passaporte = sequelize.define('Passaporte', {
  numero: {
    type: DataTypes.STRING
  },
  validade: {
    type: DataTypes.DATE
  }
});

module.exports = Passaporte;
