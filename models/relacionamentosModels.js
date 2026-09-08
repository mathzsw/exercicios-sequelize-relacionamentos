const Pessoa = require('./Pessoa');
const Passaporte = require('./Passaporte');
const Autor = require('./Autor');
const Livro = require('./Livro');
const Categoria = require('./Categoria');
const Criador = require('./Criador');
const PerfilCriador = require('./PerfilCriador');
const Video = require('./Video');
const Hashtag = require('./Hashtag');

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

// Exercício 12 - Mini-TikTok
Criador.hasMany(Video, {
  foreignKey: 'criadorId',
  as: 'videos'
});

Video.belongsTo(Criador, {
  foreignKey: 'criadorId',
  as: 'criador'
});

Criador.hasOne(PerfilCriador, {
  foreignKey: 'criadorId',
  as: 'perfil'
});

PerfilCriador.belongsTo(Criador, {
  foreignKey: 'criadorId',
  as: 'criador'
});

Video.belongsToMany(Hashtag, {
  through: 'VideoHashtag',
  foreignKey: 'videoId',
  as: 'hashtags'
});

Hashtag.belongsToMany(Video, {
  through: 'VideoHashtag',
  foreignKey: 'hashtagId',
  as: 'videos'
});
