const Pessoa = require('./Pessoa');
const Passaporte = require('./Passaporte');

Pessoa.hasOne(Passaporte, {
  foreignKey: 'pessoaId',
  as: 'passaporte'
});

Passaporte.belongsTo(Pessoa, {
  foreignKey: 'pessoaId',
  as: 'pessoa'
});
