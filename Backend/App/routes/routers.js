const router = require('express-promise-router')();
const taxiController = require('../controllers/Taxi.controllers');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/taxi', taxiController.addTaxi);

module.exports = router;