//数字の配列を用意する
const numbers = [1, 2, 3, 4, 5];

//合計を保持する変数を用意する
let sum = 0;

//関数の定義
function addNum(number){
    sum += number;  
}

//配列の一つ一つの数字を合計に足す
numbers.forEach(addNum);


//合計を表示する
console.log(sum);