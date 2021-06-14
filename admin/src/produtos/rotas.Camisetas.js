const express = require('express');
const rotas = express.Router();
const controller =require('./controller')
const path = require('path');

const multer = require('multer');
const configUpload ={
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','uploads'),
        filename: (req, file, cb) =>{
            const ext = path.extname(file.originalname);
            const name = req.body.nome;
            cb(null, `${name}-${Date.now()}${ext}`);
        }
    })
}

const upload = multer(configUpload);


rotas.get('/', controller.listar);
rotas.get('/novo', controller.formNovo)
rotas.post('/',upload.single('imagem'), controller.salvarCamiseta)

module.exports = rotas;