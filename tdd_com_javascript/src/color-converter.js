const addZeroToLeft = function(value){
    if (value.length == 1){
        value = 0 + value;
    }
    return value;
}

module.exports = {
    toHex(rgb){
        let red = rgb[0].toString(16); //16 = hexadecimal
        let green = rgb[1].toString(16); //16 = hexadecimal
        let blue = rgb[2].toString(16); //16 = hexadecimal

        //deixa cada cor com 2 dígitos
        red = addZeroToLeft(red);
        green = addZeroToLeft(green);
        blue = addZeroToLeft(blue);

        return '#'+red+green+blue;
    },
    toRgb(hex){
        //caracter '#' é opcional
        if (hex.substring(0, 1) == '#') {
            hex = hex.substring(1, hex.length); //corta o primeiro caracter, o "#"
        }
        const red = parseInt(hex.substring(0, 2), 16); //2 caracteres - 16=hexadecimal
        const green = parseInt(hex.substring(2, 4), 16); //2 caracteres - 16=hexadecimal
        const blue = parseInt(hex.substring(4, 6), 16); //2 caracteres - 16=hexadecimal
        
        return [red, green, blue];
    }
}