const mongoose = require('mongoose');
const createdPlugin = require('./plugins/created');

const Person = new mongoose.Schema({
    name: {
        firstName: String,
        lastName: String
    },
    age: {
        //type: Number
        //o tipo Mixed aceita qualquer tipo de valor no campo (dá um efeito parecido de "strict: false")
        type: mongoose.SchemaTypes.Mixed
    }
}, { strict: false }); //strict: default=true
// o strict case desabilita o controle dos dados, que impede atributos que não foram definidos neste schema
// o o strict case não afeta o plugin, que acaba fazendo parte do schema

//campos virtuais
//o get precisa ser chamado para retornar
Person.virtual('name.fullname').get(function(){
    return this.name.firstName + ' ' + this.name.lastName;
});

//o set não precisa ser chamado
Person.virtual('name.fullname').set(function(name){
    this.name.firstName = name.firstName;
    this.name.lastName  = name.lastName;
});

//Person.statics é onde estão todos os métodos estáticos da classe
Person.statics.findByName = function(firstName, lastName, callback) {
    //tem de criar instância da model para acessar o método findOne
    let PersonInstance = mongoose.model('Person', Person);

    //existe também PersonInstance.find
    //findOne retorna apenas um objeto
    return PersonInstance.findOne({ 'name.firstName': firstName, 'name.lastName': lastName }, callback);
};

//criando método de instância
Person.methods.ageGreaterThan20 = function(age, callback) {
    if (age > 20){
        callback(null, true); //(null - sempre o primeiro parâmetro é um erro, true - aqui é o retorno propriamente dito)
    } else {
        callback(null, false);
    }
}

//conecta o plugin
Person.plugin(createdPlugin, {});

module.exports = mongoose.model('Person', Person);