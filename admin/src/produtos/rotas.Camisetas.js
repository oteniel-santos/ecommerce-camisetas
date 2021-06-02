const express = require('express');
const rotas = express.Router();
const controller =require('./controller')

// rotas.get('/',(req, res) => {
//     res.send('Estou na rota camisetas');
// })

rotas.get('/', controller.listar);

module.exports = rotas;