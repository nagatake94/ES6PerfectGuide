/**コールバック関数内のthisはコンテキストが違うため、
 * const team内のコンテキストとはまた別世界に存在すると考えた方が良い。
 * 例えば以下のように記載すると、this.teamNameはundifinedになる。 */

// const team = {
//     members: ["太郎", "花子"],
//     teamName: "スーパーチーム",
//     teamSummery: function(){
//         return this.members.map(function(member){
//             return `${member}は${this.teamName}の所属です`;
//         });
//     }
// }

/**以下のように、コールバック関数の後に.bind(this)のように明示的に記載すると
 * thisで指定できるようになる */

// const team = {
//     members: ["太郎", "花子"],
//     teamName: "スーパーチーム",
//     teamSummery: function(){
//         return this.members.map(function(member){
//             return `${member}は${this.teamName}の所属です`;
//         }).bind(this);
//     }
// }


/**またコールバック関数を呼ぶ前にselfなどの変数にthisを格納することで、
 * 以下のコールバック関数内でthisの内容を呼べるようになる。
 */

// const team = {
//     members: ["太郎", "花子"],
//     teamName: "スーパーチーム",
//     teamSummery: function(){
//         var self = this;
//         return this.members.map(function(member){
//             return `${member}は${self.teamName}の所属です`;
//         });
//     }
// }

/**コールバック関数をアロー関数で記載することにより、
 * thisをコールバック関数内で使用できるようになる。
 * この時のthisをlexical thisと呼んだりする。 */

const team = {
    members: ["太郎", "花子"],
    teamName: "スーパーチーム",
    teamSummery: function(){
        return this.members.map(member=>{
            //lexical this
            //this === team
            return `${member}は${this.teamName}の所属です`;
        });
    }
}