const model = require('./model');

function listar(req,res){
    const produtos = model.listar();
    res.render('produtos/views/listar',{produtos});
}

function formNovo(req,res) {
    const produto = {}
    res.render('./produtos/views/form-cadastro', {produto});
}

function validarDados(dado, msg){
    if(!dado) throw msg
    if(typeof dado === 'string' && !dado.trim()) throw msg
}

function salvarCamiseta(req,res){
   const nome = req.body.nome
   const preco = req.body.preco
   const descricao = req.body.descricao
   const imagem = req.file.path
   
   try {
       validarDados(nome, 'Nome do produto não informado');
       validarDados(preco, 'Preco do produto não informado');
       validarDados(descricao, 'Descrição do produto não informada');
       validarDados(imagem, 'Imagem do produto não inserida');
   } catch (msg) {
       return res.send(msg)    
   }
   const result = model.salvar({nome, preco, descricao, imagem});
   res.send(result);''
}

module.exports = {listar, formNovo, salvarCamiseta }