var numbers = [1, 1, 2, 3, 4, 4];
 
// 重複した数字を排除する関数(引数にnumbers配列を与える)
function unique(array) {
 
 
    // reduceメソッドを用いて、以下の二つを行う
    // 　・新たな空配列prevの作成
    // 　・numbers配列を取り込み　→　マッピング用
    return array.reduce(function (prev, number) {
 
        //  findメソッドを用いて、追加しようとしている数字が
        //  prev配列にあったらexistingElement変数にその数字を入れる
        var existingElement = prev.find(function (target) {
            return target === number;
        });
 
        //  existingElementに数字が入っていたら重複している証拠なので配列には追加しない
        //  !existingElementのとき（重複していない）だけprev配列に数字を追加する。
        if (!existingElement) {
            prev.push(number);
        }
 
        //  作成した配列をreturn
        return prev;
    }, []);
}
 
//  関数の引数に配列を入れて呼び出し
unique(numbers);
 