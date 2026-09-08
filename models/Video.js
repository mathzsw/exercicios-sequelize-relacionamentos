const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Video = sequelize.define('Video', {
  titulo: {
    type: DataTypes.STRING
  },
  descricao: {
    type: DataTypes.STRING
  },
  videoUrl: {
    type: DataTypes.STRING
  }
});

module.exports = Video;
