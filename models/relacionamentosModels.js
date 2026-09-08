const Pessoa = require('./Pessoa');
const Passaporte = require('./Passaporte');
const Autor = require('./Autor');
const Livro = require('./Livro');
const Categoria = require('./Categoria');

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

Livro.belongsToMany(Categoria, {
  through: 'LivroCategoria',
  foreignKey: 'livroId',
  as: 'categorias'
});

Categoria.belongsToMany(Livro, {
  through: 'LivroCategoria',
  foreignKey: 'categoriaId',
  as: 'livros'
});
