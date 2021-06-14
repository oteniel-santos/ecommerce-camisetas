const path = require('path');
const express = require('express');
const app = express();
const front = require('./front-controller');

const diretorioPublic = path.join(__dirname, '../public');
app.use(express.static(diretorioPublic));

const diretorioUpload = path.join(__dirname, '../uploads')
app.use('/uploads', express.static(diretorioUpload));


app.use(express.urlencoded({extended:true}));

app.set('views', path.join(__dirname));
app.set('view engine','ejs');

app.use(front);

app.listen(3003, ()=>{
    console.log('Servidor rodando...');
})