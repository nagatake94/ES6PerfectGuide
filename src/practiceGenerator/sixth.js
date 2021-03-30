const testingTeam = {
    lead: "典子",
    tester: "隆"
}

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: "開発部",
    lead: "太郎",
    manager: "花子",
    engineer: "次郎"
};


function* TeamIterator(team){
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
    yield* testingTeamGenerator;
}

function* TestingTeamIterator(team){
    yield team.lead;
    yield team.tester;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)){
    names.push(name);
}

names; //["太郎"、"花子","次郎","典子","隆"]   