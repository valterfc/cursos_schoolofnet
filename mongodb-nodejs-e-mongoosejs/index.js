const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//conectar no banco de dados
// mongoose.connect('mongodb://user:password@host:port/dbname', { useMongoClient: true }); //para versões do mongoose abaixo de 5, usar useMongoClient
// { useNewUrlParser: true } é para versões mais recentes
mongoose.connect('mongodb://localhost:27017/mongo-mongoose', { useNewUrlParser: true });

//requerendo o src/index.js, e passando o app (que é o express) como parâmetro
require('./src/index')(app);

app.listen(9000, () => {
    console.log('Express started');
});
