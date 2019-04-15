# for_in문 
### python에서만 쓰던 for_in문을 js에서 사용해보자.  
> const player = {name: 'oh' , rank : 'bronze' , age:25}  
for(let prop in player){  
    if(!player.hasOwnProperty(prop)) continue;  
    console.log(prop+': '+player[prop]);  
}  
### python에서만 되던걸 js에서 구현한 듯 하다.  

# for_of문
    함수를 사용 할 수 있는 for문?  
    for문의 요소를 함수로 넣는 것이다.  
> function test(){  
    console.log("test");  
}   
test1 = [test(),test(),test()];  
for(function1 of test1){  
    function1();  
}  
