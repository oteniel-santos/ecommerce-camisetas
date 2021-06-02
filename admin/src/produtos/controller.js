const model = require('./model');

function listar(req,res){
    // res.send('Vou listar as camisetas')
    const produtos = model.listar();
    // res.send(produtos);
    res.render('produtos/views/listar',{produtos});
}

module.exports = {listar}