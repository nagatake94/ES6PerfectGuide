function Field(value){
    this.value = value;
};


Field.prototype.validate = function(){
    return this.value.length > 0;
};


var userName = new Field("my_username");
var password = new Field("my_password");

/**仮にFieldがもっと増えた場合、いちいちvalidateするのめんどくさい。
 * そこでevery!!! */

//userName.validate() && password.validate();


var fields = [
    userName,
    password
];

var formIsValid = fields.every(function(field){
    return field.validate();
});

if (formIsValid) {
    //サーバーにリクエストを投げる
} else {
    //エラーを表示する
}



