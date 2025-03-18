const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// Rotas exemplo
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.post('/users', (req, res) => {/* Criar */});
app.get('/users', (req, res) => {/* Ler */});
app.put('/users/:id', (req, res) => {/* Atualizar */});
app.delete('/users/:id', (req, res) => {/* Excluir */});
