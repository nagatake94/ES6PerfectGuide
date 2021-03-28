var names = [
 "けん",
 "はなこ",
 "そういちろう"
];


names.every(function(name){
    return name.length >= 3;
});

names.some(function(name){
    return name.length >= 3;
});