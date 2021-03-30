function* colors(){
    yield "red";
    yield "blue";
    yield "green";
}

const gen = colors();
gen.next(); //false
gen.next(); //false
gen.next(); //false
gen.next(); //true


const myColors = [];
for (let color of colors()){
    myColors.push(color);
};

//myColors; ["red","blue","green"]
