const express = require('express');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

/*
A definição de rotas aceita a seguinte estrutura:
app.METHOD(PATH, HANDLER)
Onde:
app é uma instância do express.
METHOD é um método de solicitação HTTP.
PATH é um caminho no servidor.
HANDLER é a função executada quando a rota é correspondida.
*/

routes.post('/sessions', SessionController.store);

module.exports = routes;