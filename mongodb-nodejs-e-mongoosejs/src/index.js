// tratando as rotas
// e recebendo o app
//endpoint
module.exports = (app) => {
    app.use('/', require('./routes/main/index'));
    app.use('/cars', require('./routes/cars/index'));
}