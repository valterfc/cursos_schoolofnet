const request = require('request');
const assert = require('assert');

describe('teste de API de conversão de cores', function(){
    //request é uma requisição assíncrona, então tem de usar "done"
    it('converte para HEX', function(done){
        request('http://localhost:9000/rgb-to-hex/255/0/0', function(error, response, body){
            assert.strictEqual(response.statusCode, 200); //sucesso
            assert.strictEqual(body, '#ff0000'); //vermelho em hex
            done(); //só conclui aqui
        });
    });

    it('converte para RGB', function(done){
        request('http://localhost:9000/hex-to-rgb/ff0000', function(error, response, body){
            assert.strictEqual(response.statusCode, 200); //sucesso
            assert.strictEqual(body, '255,0,0'); //255 = vermelho
            done(); //só conclui aqui
        });
    });
});