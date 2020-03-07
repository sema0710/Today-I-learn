const coffee = (function(){
    let coffee = 0;
    let water = 0;
    let milk = 0
    let greenTea = 0;
    const addCoffee = function() {
        coffee += 10;
    };
    const addWater = function(){
        water += 10;
    };
    const addMilk = function(){
        milk += 10;
    };
    const addGreenTea = function(){
        greenTea += 10;
    };
    const reset = function(){
        coffee = 0;
        water = 0;
        milk = 0;
        greenTea = 0;
    }
    const state = function(){
        console.log("coffee:" + coffee);
        console.log("water:" + water);
        console.log("milk:" + milk);
        console.log("greenTea:" + greenTea);
    }
    return {
        addCoffee,
        addWater,
        addMilk,
        addGreenTea,
        reset,
        state,
    }
})();

coffee.addCoffee();
coffee.state();