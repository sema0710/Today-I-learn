function coin(){
    let coin = Math.random() * 2 + 1;
    return parseInt(coin);
}
let button = document.getElementById("rollbutton");
let front = document.getElementById("front");
let back = document.getElementById("back");
let where;
front.addEventListener("click",function click(){
    where = front.value;
    console.log(where);
})
back.addEventListener("click",function click(){
    where = back.value;
    console.log(where);    
})
button.addEventListener("click", function click(){
    console.log("on");
    let p = document.getElementById("text");
    p.innerHTML = "";
    document.getElementById("coin").style.animationDuration = "0.5s";
    document.getElementById("coin").style.animationName = "roll";
    document.getElementById("coin").style.animationIterationCount = 5; 
    if(coin() == 1){
        p.innerHTML = "front";
    }
    else{
        p.innerHTML = "back";
    }
    if(p.innerHTML == where){
        document.getElementById("result").innerHTML = "win";
    }
    else{
        document.getElementById("result").innerHTML = "lose"
    }
});