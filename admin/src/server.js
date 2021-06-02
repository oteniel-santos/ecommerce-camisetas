const path = require('path');
const express = require('express');
const app = express();
const front = require('./front-controller');

const diretorioPublic = path.join(__dirname, '../public');
app.use(express.static(diretorioPublic));

app.set('views', path.join(__dirname));
app.set('view engine','ejs');

app.use(front);

app.listen(3000, ()=>{
    console.log('Servidor rodando...');
})