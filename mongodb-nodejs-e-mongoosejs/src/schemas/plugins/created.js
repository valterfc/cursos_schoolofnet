//sobre arrow functions
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions

//arrow function não faz bind do "this" (não mantém o escopo)
//são sempre anônimas

module.exports = function(schema, options) {
    schema.add({ created: Date });

    //middleware "pre" (antes de salvar)
    //aqui será usado o "this", então precisa ser "function"
    schema.pre('save', function(next) {
        this.created = new Date();
        next();
    });
}