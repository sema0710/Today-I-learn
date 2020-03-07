// factory pattern
function Car(){}
Car.prototype.doorCount = function() {
    console.log(this.door);
};

Car.factory = function(type){
    if(typeof Car[type] === "function"){
        Car[type].prototype = new Car();
    }

    return new Car[type]();
}

Car.sonata = function(){
    console.log(this);
    this.door = 4;
}

Car.benz = function(){
    console.log(this);
    this.door = 6;
}

car1 = Car.factory("sonata");
car1.doorCount();