function count(targetString){
    const characters = [
        "a","i","u","e","o"
    ];

    var numbers = 0;

    for (var i = 0; i < targetString.length; i++ ){
        if (characters.includes(targetString[i])){
            number++;
        }
    }

    return number;
}

count("aiuagooghoshgorehg");