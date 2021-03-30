const testingTeam = {
    lead: "典子",
    tester: "隆",
    [Symbol.iterator]: function* (){
        yield this.lead;
        yield this.tester; 
    }
}

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: "開発部",
    lead: "太郎",
    manager: "花子",
    engineer: "次郎",
    [Symbol.iterator]: function* (){
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        //for of がSymbol.iteratorを探しに行く
        yield* this.testingTeam;
    }
};




const names = [];
for (let name of engineeringTeam){
    names.push(name);
}

names; //["太郎"、"花子","次郎","典子","隆"]   