const express = require('express');
const { engine } = require('express-handlebars');
const sequelize = require('./db');
const Pessoa = require('./models/Pessoa');
const Passaporte = require('./models/Passaporte');
const Autor = require('./models/Autor');
const Livro = require('./models/Livro');
const Categoria = require('./models/Categoria');

require('./models/relacionamentosModels');

const app = express();
const PORT = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));

// Exercício 2
app.get('/exercicio2', async (req, res) => {
  try {
    const pessoa = await Pessoa.create({ nome: 'Matheus' });
    await pessoa.createPassaporte({ numero: 'BR123456', validade: '2030-12-31' });
    res.send('Pessoa e Passaporte criados com sucesso!');
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao criar Pessoa e Passaporte.');
  }
});

// Exercício 3
app.get('/exercicio3', async (req, res) => {
  try {
    const pessoa = await Pessoa.findByPk(1, {
      include: { model: Passaporte, as: 'passaporte' }
    });
    console.log(pessoa ? pessoa.toJSON() : 'Pessoa não encontrada.');
    res.send('Consulta realizada. Veja o terminal.');
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao consultar Pessoa.');
  }
});

// Exercício 5
app.get('/exercicio5', async (req, res) => {
  try {
    const autor = await Autor.create({ nome: 'Machado de Assis' });
    await autor.createLivro({ titulo: 'Dom Casmurro', anoPublicacao: 1899 });
    await autor.createLivro({ titulo: 'Memórias Póstumas de Brás Cubas', anoPublicacao: 1881 });
    res.send('Autor e livros criados com sucesso!');
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao criar Autor e Livros.');
  }
});

// Exercício 6
app.get('/exercicio6', async (req, res) => {
  try {
    const autor = await Autor.findByPk(1, {
      include: { model: Livro, as: 'livros' }
    });
    console.log(autor ? autor.toJSON() : 'Autor não encontrado.');
    res.send('Consulta realizada. Veja o terminal.');
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao consultar Autor.');
  }
});

// Exercício 8
app.get('/exercicio8', async (req, res) => {
  try {
    const livro = await Livro.create({ titulo: 'O Alienista', anoPublicacao: 1882 });

    const literatura = await Categoria.create({ nome: 'Literatura' });
    const classico = await Categoria.create({ nome: 'Clássico' });

    await livro.setCategorias([literatura, classico]);

    res.send('Livro e categorias associados com sucesso!');
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao associar Livro e Categorias.');
  }
});

// Exercício 9
app.get('/exercicio9', async (req, res) => {
  try {
    const livro = await Livro.findByPk(1, {
      include: { model: Categoria, as: 'categorias' }
    });
    console.log(livro ? livro.toJSON() : 'Livro não encontrado.');
    res.send('Consulta realizada. Veja o terminal.');
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao consultar Livro.');
  }
});

// Exercício 10 - formulário de cadastro de Livro
app.get('/livros/cadastrar', async (req, res) => {
  try {
    const autores = await Autor.findAll({ order: [['nome', 'ASC']] });
    const categorias = await Categoria.findAll({ order: [['nome', 'ASC']] });

    res.render('cadastrarLivro', {
      autores: autores.map((autor) => autor.toJSON()),
      categorias: categorias.map((categoria) => categoria.toJSON())
    });
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao carregar formulário.');
  }
});

app.post('/livros/cadastrar', async (req, res) => {
  try {
    const { titulo, anoPublicacao, autorId } = req.body;
    const categoriaIds = Array.isArray(req.body.categorias)
      ? req.body.categorias
      : [req.body.categorias];

    const autor = await Autor.findByPk(autorId);
    const categorias = await Categoria.findAll({
      where: { id: categoriaIds }
    });

    if (!autor || categorias.length === 0) {
      return res.status(400).send('Autor ou categoria inválidos.');
    }

    const livro = await Livro.create({
      titulo,
      anoPublicacao,
      autorId: autor.id
    });

    await livro.setCategorias(categorias);

    res.redirect(`/livros/${livro.id}`);
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao cadastrar Livro.');
  }
});

// Exercício 11 - detalhamento do Livro
app.get('/livros/:id', async (req, res) => {
  try {
    const livro = await Livro.findByPk(req.params.id, {
      include: [
        { model: Autor, as: 'autor' },
        { model: Categoria, as: 'categorias' }
      ]
    });

    if (!livro) {
      return res.status(404).send('Livro não encontrado.');
    }

    res.render('detalharLivro', {
      livro: livro.toJSON()
    });
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao detalhar Livro.');
  }
});

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((erro) => {
    console.error('Erro ao sincronizar o banco:', erro);
  });
