const assert = require('assert'); //recurso nativo do node

describe('testando contador', function(){
    it('contador deve iniciar com valor zero', function(){
        //console.log('resultado'); //este passa sempre
        const counterResult = 0;
        assert.strictEqual(counterResult, 1);
    });
});