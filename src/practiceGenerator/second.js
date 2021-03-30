// function* numbers(){

// }

// console.log(numbers());

function* numbers(){
    yield;
}

const gen = numbers();
// gen.next(); {"done": false}
// gen.next(); {"done": true}