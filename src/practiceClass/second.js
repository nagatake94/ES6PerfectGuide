class Car{
    constructor(options){
        this.title = options.title;
    }
    drive(){
        return "ウィーン";
    }
}

const car = new Car({title: "アクア"});
//car; {title: "アクア"}
//car.drive(); ウィーン