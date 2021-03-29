function Car(options){
    this.title = options.title;
}

Car.prototype.drive = () => {
    return "ウィーン";
}

var car = new Car({ title: "プリウス"});

//car; {"title":"プリウス"}
//car.drive(); ウィーン

// function Toyota(options){
//     this.color= options.color;
// }


// const toyota = new Toyota({color:"red", title:"アクア"});

//toyota; {color:"red"}

function Toyota(options){
    Car.call(this, options);
    this.color= options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor= Toyota;

Toyota.prototype.honk = () =>{
    return "ブブー！！";
}

const toyota = new Toyota({color:"red", title:"アクア"});
// toyota; {color:"red", title:"アクア"}
// toyota.drive(); ウィーン
// toyota.honk();  ブブー！！
