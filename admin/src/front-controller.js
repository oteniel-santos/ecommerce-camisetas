const express= require('express');
const rotas = express.Router();
const rotasCamisetas = require('./produtos/rotas.Camisetas');

rotas.get('/',(req,res) => {
    // res.send('Estou no Front Controller');
    res.render('layout-base/index');
})

rotas.use('/camisetas', rotasCamisetas);

module.exports = rotas;