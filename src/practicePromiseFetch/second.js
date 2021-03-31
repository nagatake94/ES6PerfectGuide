const promise = new Promise((resolve, reject)=>{
    //3秒後にコールバックが呼ばれる
    setTimeout(() => {
        resolve();
    }, 3000)
});

//resolve()の時にthenが呼ばれる
//reject()の時にcatchが呼ばれる
promise
    .then(()=>console.log("処理が完了しました。"))
    .then(()=>console.log("ここも呼ばれるよ"))
    .catch(()=> console.log("問題発生！！！"))

