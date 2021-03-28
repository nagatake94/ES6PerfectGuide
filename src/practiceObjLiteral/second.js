// function saveFile(url, data){
//     $.ajax({ method: "POST", url: url, data: data });
// }

function saveFile(url, data){
    $.ajax({ 
        method: "POST", 
        url, 
        data });
}


const url = "https://fileupload.com";
const data = { color: "red" };


saveFile(url, data);