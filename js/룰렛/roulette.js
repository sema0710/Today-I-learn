const rollButton = document.getElementById("rouletteRoll");
const blank1 = document.getElementsByClassName("rouletteBlank1");
const blank2 = document.getElementsByClassName("rouletteBlank2");
const blank3 = document.getElementsByClassName("rouletteBlank3");
const setting = {
    rouletteHeight : 60,
    time : "0.2s",
    elementLength: 3,
}

init();
rollButton.addEventListener("click",()=>{
    let forThing = setInterval(function(){
        roll(blank1);
    },200);
    let forThing2 = setInterval(()=>{
        roll(blank2);
    },200);
    let forThing3 = setInterval(function(){
        roll(blank3);
    },200);
    setTimeout(function(){
        clearTimeout(forThing);
    },3000);
    setTimeout(()=>{
        clearTimeout(forThing2);
    },3500);
    setTimeout(()=>{
        clearTimeout(forThing3);
    },4000)
});


function init(){
    for(let i=0;i < blank1.length;i++){
        blank1[i].style.test = 0;
        blank2[i].style.test = 0;
        blank3[i].style.test = 0;
    }
}

function roll(blank){
    for(let i=0;i < setting.elementLength;i++){
        blank[i].style.transitionDuration = setting.time;
        blank[i].style.test = blank[i].style.test+setting.rouletteHeight;
        blank[i].style.transform = `translateY(${blank[i].style.test}px)`
        if(blank[i].style.test - (setting.elementLength - i) * setting.rouletteHeight >= -setting.rouletteHeight){
            blank[i].style.transitionDuration = "0s";
            blank[i].style.test = blank[i].style.test-setting.rouletteHeight*setting.elementLength;
            blank[i].style.transform = `translateY(${blank[i].style.test}px)`
        }
    }
}