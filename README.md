# ATIVIDADE – ASSOCIAÇÕES SEQUELIZE

**Disciplina:** Programação Web 1  
**Professor:** Eric de Luna Sales  
**Aluno:** Matheus Augusto Rodrigues de Alencar  
**Turma:** 2º A – Técnico Integrado em Desenvolvimento de Sistemas  
**Instituição:** IFPE – Campus Jaboatão dos Guararapes  
**Valor:** 100 pontos  
**Tema:** Exercícios com Sequelize – Relacionamento entre Models/Tabelas  

## Objetivo

Implementar associações entre models/tabelas utilizando **Sequelize**, trabalhando com relacionamentos **1:1, 1:N e N:N**, métodos mágicos, `include`, formulários com relacionamentos e uma aplicação completa baseada em um mini-TikTok.

## Exercícios desenvolvidos

### Relacionamento 1:1
- **Exercício 1:** Models `Pessoa` e `Passaporte` com `hasOne` e `belongsTo`.
- **Exercício 2:** Criação de Pessoa e Passaporte utilizando `createPassaporte()`.
- **Exercício 3:** Busca de Pessoa com Passaporte utilizando `include`.

### Relacionamento 1:N
- **Exercício 4:** Models `Autor` e `Livro` com `hasMany` e `belongsTo`.
- **Exercício 5:** Criação de Autor e dois Livros relacionados.
- **Exercício 6:** Busca de Autor com seus Livros utilizando `include`.

### Relacionamento N:N
- **Exercício 7:** Models `Livro` e `Categoria` com `belongsToMany`.
- **Exercício 8:** Associação de um Livro com duas ou mais Categorias.
- **Exercício 9:** Busca de Livro com suas Categorias utilizando `include`.

### Formulários com relacionamento
- **Exercício 10:** Formulário de cadastro de Livro com seleção de Autor e múltiplas Categorias.
- **Exercício 11:** Página de detalhes do Livro exibindo título, autor e categorias.

### Aplicação Completa – Mini-TikTok
- **Exercício 12:** Aplicação utilizando `Criador`, `Video`, `PerfilCriador` e `Hashtag`.
- Relacionamento **1:N** entre Criador e Video.
- Relacionamento **1:1** entre Criador e PerfilCriador.
- Relacionamento **N:N** entre Video e Hashtag.
- Cadastro de vídeos com seleção de Criador e múltiplas Hashtags.
- Página de detalhes do vídeo com Criador e Hashtags.
- Página de detalhes do Criador com perfil e vídeos publicados.

## Tecnologias utilizadas

- Node.js
- Express
- Sequelize
- SQLite3
- Express Handlebars
- HTML

## Estrutura de relacionamentos

```text
Pessoa 1 ───── 1 Passaporte

Autor 1 ───── N Livro

Livro N ───── N Categoria

Criador 1 ───── N Video
Criador 1 ───── 1 PerfilCriador
Video N ───── N Hashtag
```

## Observação

As associações foram centralizadas no arquivo `models/relacionamentosModels.js`, utilizando `foreignKey` e `as` explícitos, conforme a orientação da atividade.