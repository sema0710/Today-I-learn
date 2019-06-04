# for_in문 
### 매개변수는 배열의 인덱스를 받아온다. --> 값은 못받아옴  
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
# foreach문
    for문과는 다르지만 for-in문과는 다르게, 인덱스만 받아오는 것이 아니고, 그 값과 인덱스, 배열까지 받아온다.  
> var item = ["item1","item2","item3"];  
forEach((a,b,c) =>{//순서대로 값,인덱스,배열이다.  
    console.log(a,b,c);  
});  
이것의 출력 결과는    
"item1",0,["item1","item2","item3"]  
"item2",1,["item1","item2","item3"]  
"item3",2,["item1","item2","item3"]  
가 나온다.