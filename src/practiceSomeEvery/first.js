var computers = [
    { name: "Apple", ram: 24 },
    { name: "Compaq", ram: 4 },
    { name: "Acer", ram: 32 },
];

// 16GB ramが必要なソフト

//全てで動かせるフラグ
var allComputersCanRun = true;

//どれかでは動かせるフラグ
var someComputersCanRun = false;

for (var i=0; i<computers.length; i++){
    var computer = computers[i];

    if (computer.ram < 16){
        allComputersCanRun = false;
    }else{
        someComputersCanRun = true;
    }
}

// console.log(allComputersCanRun);
// console.log(someComputersCanRun);

computers.every(function(computer){
    return computer.ram >= 16;
});

computers.some(function(computer){
    return computer.ram >= 16;
});
