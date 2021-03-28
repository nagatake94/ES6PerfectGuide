// function makeAjaxRequest(url, method){
//     if(!method){
//         method = "GET";
//     }

//     //ajaxリクエストをするロジックがここにあると想定

//     return method;
// }

function makeAjaxRequest(url, method = "GET"){
    return method;
}

//nullを指定すると何も返さない
makeAjaxRequest("google.com", null);

//undifinedだとデフォルト引数が呼ばれる
makeAjaxRequest("google.com", undefined);

makeAjaxRequest("google.com", "POST");
