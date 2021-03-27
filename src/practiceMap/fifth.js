function pluck(array, property) {

    // pluck関数の中身を実装してください

    const obj = array.map(function(value){

        return value[property];

    } );

    return obj;

}



var colorObjects = [{ color: '赤' }, { color: '青' }, { color: '黄色' }];



var colorNames = pluck(colorObjects, 'color');