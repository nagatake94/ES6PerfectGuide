// function getMessage(){
//     const year = new Date().getFullYear();

//     return "今年は" + year + "年です。";
// }


function getMessage(){  
    return `今年は${new Date().getFullYear()}年です。`;
}

getMessage();