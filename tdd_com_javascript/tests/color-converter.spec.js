const assert = require('assert');
const colorConverter = require('../src/color-converter');

describe('Testando conversor de cores', function(){
    describe('conversão de RGB para HEX', function(){
        it('converte Vermelho', function(){
            const colorRgb = [255, 0, 0]
            const colorHex = colorConverter.toHex(colorRgb);
            assert.strictEqual(colorHex, '#ff0000');
        });

        it('converte Verde', function(){
            const colorRgb = [0, 255, 0]
            const colorHex = colorConverter.toHex(colorRgb);
            assert.strictEqual(colorHex, '#00ff00');
        });

        it('converte Azul', function(){
            const colorRgb = [0, 0, 255]
            const colorHex = colorConverter.toHex(colorRgb);
            assert.strictEqual(colorHex, '#0000ff');
        });
    });

    describe('conversão de HEX para RGB', function(){
        it('conversão com #', function(){
            const colorRgb = colorConverter.toRgb('#ff0000');
            assert.deepStrictEqual(colorRgb, [255, 0, 0]);
        });

        it('conversão sem #', function(){
            const colorRgb = colorConverter.toRgb('ff0000');
            assert.deepStrictEqual(colorRgb, [255, 0, 0]);
        });
    });
});