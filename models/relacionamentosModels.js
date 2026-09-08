const Pessoa = require('./Pessoa');
const Passaporte = require('./Passaporte');
const Autor = require('./Autor');
const Livro = require('./Livro');

Pessoa.hasOne(Passaporte, {
  foreignKey: 'pessoaId',
  as: 'passaporte'
});

Passaporte.belongsTo(Pessoa, {
  foreignKey: 'pessoaId',
  as: 'pessoa'
});

Autor.hasMany(Livro, {
  foreignKey: 'autorId',
  as: 'livros'
});

Livro.belongsTo(Autor, {
  foreignKey: 'autorId',
  as: 'autor'
});
