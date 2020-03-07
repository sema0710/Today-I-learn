function coffeBase(size){
    this.coffe = 10* size;
    this.water = 10* size;
    this.greenTea = 0;
    this.milk = 0;
}

function cafeMoca(coffe){
    coffe.milk += 10;
    return coffe;
}

function greenTeaLatte(coffe){
    coffe.greenTea += 10;
    coffe.milk = coffe.milk + 10;
    return coffe;
}

function addGreenTea(coffe){
    coffe.greenTea += 10;
    return coffe;
}

function addMilk(coffe){
    coffe.milk += 10;
}

const coffe = new coffeBase(1);
addMilk(addGreenTea(coffe));

console.log(coffe);