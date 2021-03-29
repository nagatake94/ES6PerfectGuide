class Car{
    constructor({title}){
        this.title = title;
    }
    drive(){
        return "ウィーン";
    }
}

class Toyota extends Car {
    constructor(options){
        super(options);
        this.color = options.color;
    }

    honk(){
        return "ブブー！！"
    }
}

const toyota = new Toyota({ color :"red", title: "アクア"});
//toyota; { color :"red", title: "アクア"}
// toyota.drive(); ウィーン
// toyota.honk();　ブブー！！