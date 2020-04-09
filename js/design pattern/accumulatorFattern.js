const User = [
    { name: "ohjunsang", money: 50 },
    { name: "jone", money: 10 },
    { name: "moe", money: 100 },
    { name: "rich", money: 1000 },
];

function getAllUserMoney(userArray,projection){
    if(userArray.length > 1){
        return projection(userArray[0]) + getAllUserMoney(userArray.slice(1),projection);
    }
    return projection(userArray[0]);
}

function projection(userArray){
    return userArray.money;
}

const allMoney = getAllUserMoney(User,projection);
console.log(allMoney);