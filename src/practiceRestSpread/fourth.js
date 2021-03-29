const MathLibrary = {
    // calculateProduct(a, b){
    //     return a * b;
    // },

    calculateProduct(...rest){
        return this.multiply(...rest);
    },

    multiply(a, b){
        return a * b;
    }
};

MathLibrary.calculateProduct(2,3);
MathLibrary.multiply(2,3);



