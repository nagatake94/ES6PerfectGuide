

// const numbers = [1, 2, 3];

// function double() {
    
// }



const numbers = [1, 2, 3];

function double(array) {
    let newNumbers = [];
    
    let [number, ...rest] = array;
    newNumbers.push(number*2);
    
    while(rest.length !== 0){
        let [number, ...newRest] = rest;
        
        newNumbers.push(number * 2);
        rest = newRest;
    }
    
    return newNumbers;
    
}