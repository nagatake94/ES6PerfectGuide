var savedFile = {
    extension : "jpg",
    name: "profile",
    size: 14040
}

// function fileSummary(file){
//     return `${file.name}.${file.extension}の容量は${file.size}です。`;
// }

/**分割代入は関数の引数にも使える */

// function fileSummary({ name, extension, size }){
//     return `${name}.${extension}の容量は${size}です。`;
// }

function fileSummary({ name, extension, size }, {username}){
    return `${username}: ${name}.${extension}の容量は${size}です。`;
}


fileSummary(saveFile, {username : "Kei"});