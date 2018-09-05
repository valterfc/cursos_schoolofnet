const assert = require('assert'); //recurso nativo do node
const counter = require('../src/counter');

describe('testando contador', function(){
    before(function(){
        //console.log('before');
    });

    after(function(){
        //console.log('after');
    });
    
    beforeEach(function(){
        counter.count = 0; //executa antes de cada teste
        //console.log('beforeEach');
    });

    afterEach(function(){
        //console.log('afterEach');
    });

    it('contador deve iniciar com valor zero', function(){
        const counterResult = counter.count;
        assert.strictEqual(counterResult, 0);
    });

    it('teste de incremento de 1', function(){
        counter.increment();
        const counterResult = counter.count;
        assert.strictEqual(counterResult, 1);
    });

    it('teste de decremento de 1', function(){
        counter.decrement();
        const counterResult = counter.count;
        assert.strictEqual(counterResult, -1);
    });

    it('teste de incremento de 10', function(){
        counter.increment(10);
        const counterResult = counter.count;
        assert.strictEqual(counterResult, 10);
    });
});