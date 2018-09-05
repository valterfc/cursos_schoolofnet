(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod);
        global.colorConverter = mod.exports;
    }
})(this, function (module) {
    'use strict';

    var addZeroToLeft = function addZeroToLeft(value) {
        if (value.length == 1) {
            value = 0 + value;
        }
        return value;
    };

    module.exports = {
        toHex: function toHex(rgb) {
            var red = rgb[0].toString(16); //16 = hexadecimal
            var green = rgb[1].toString(16); //16 = hexadecimal
            var blue = rgb[2].toString(16); //16 = hexadecimal

            //deixa cada cor com 2 dígitos
            red = addZeroToLeft(red);
            green = addZeroToLeft(green);
            blue = addZeroToLeft(blue);

            return '#' + red + green + blue;
        },
        toRgb: function toRgb(hex) {
            //caracter '#' é opcional
            if (hex.substring(0, 1) == '#') {
                hex = hex.substring(1, hex.length); //corta o primeiro caracter, o "#"
            }
            var red = parseInt(hex.substring(0, 2), 16); //2 caracteres - 16=hexadecimal
            var green = parseInt(hex.substring(2, 4), 16); //2 caracteres - 16=hexadecimal
            var blue = parseInt(hex.substring(4, 6), 16); //2 caracteres - 16=hexadecimal

            return [red, green, blue];
        }
    };
});
