var numbers = [10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

/**reduceは、第二引数に初期値を置く必要がある。
 * reduceは、配列の中身を集約していくイメージ！
 */

numbers.reduce(function(sum, number){
    return sum + number;
}, 0);