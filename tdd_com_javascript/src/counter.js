module.exports = {
    count: 0,
    increment(quantity = 1){
        if (quantity == undefined) { //não é necessário, porque já tem valor definido
            quantity = 1;
        }
        this.count += quantity;
    },
    decrement(){
        this.count--;
    }
};