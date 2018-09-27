const mongoose = require('mongoose');
const createdPlugin = require('./plugins/created');

const Car = new mongoose.Schema({
    name: String
});

//conecta o plugin
Car.plugin(createdPlugin, {});

module.exports = mongoose.model('Car', Car);