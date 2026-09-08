const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Hashtag = sequelize.define('Hashtag', {
  nome: {
    type: DataTypes.STRING
  }
});

module.exports = Hashtag;
