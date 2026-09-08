// Exercício 3 - adicionar ao app.js
app.get('/exercicio3', async (req, res) => {
  try {
    const pessoa = await Pessoa.findByPk(1, {
      include: {
        model: Passaporte,
        as: 'passaporte'
      }
    });

    console.log(pessoa ? pessoa.toJSON() : 'Pessoa não encontrada.');
    res.send('Consulta realizada. Veja o terminal.');
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao consultar Pessoa.');
  }
});
