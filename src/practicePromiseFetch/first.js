const promise = new Promise((resolve, reject)=>{
    //resolve();
    reject();
});

//resolve()の時にthenが呼ばれる
//reject()の時にcatchが呼ばれる
promise
    .then(()=>console.log("処理が完了しました。"))
    .then(()=>console.log("ここも呼ばれるよ"))
    .catch(()=> console.log("問題発生！！！"))

