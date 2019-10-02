const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-wiyig.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// na funcao express(); temos os metodos abaixo
// GET, POST, PUT, DELETE

// primeiro parametro eh o localhost:3333
// segundo parametro uma funcao - req eh onde recebe todas as infos que o usuario esta enviando
// e o res devolve uma resposta para esta requisicao.
// req.query = acessa os query params (para filtros)
// req.params = acessa route params (para edicao e delete)
// req.body = acessa corpo da requisicao (para criacao e edicao) 

app.use(express.json());
app.use(routes);


app.listen(3333);