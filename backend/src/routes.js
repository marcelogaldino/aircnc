const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const routes = express.Router();
const upload =  multer(uploadConfig);

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

routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;