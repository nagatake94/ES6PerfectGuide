// function addNumbers(numbers){
//     return numbers.reduce((sum, number) => {
//         return sum + number;
//     },0); 
// }

//配列の形で渡していることに注目
// addNumbers([1,2,3,4,5])


/**...anyという引数を渡すと、
 * 渡された値が配列に変換される。
 */
function addNumbers(...numbers){
    return numbers.reduce((sum, number) => {
        return sum + number;
    },0); 
}

addNumbers(1,2,3,4,5,6,7,8,9,10)