# hoisting
호이스팅은 프로그래머가 js를 작성할 때 함수나   
변수를 맨 위로 올려서 해석하는 것을 의미한다.  

## 변수
> var x = 3;  
if(x === 3){  
    var x = 2;  
    console.log(x);  
}  
console.log(x);  

이 코드가 js가 해석 하면

> var x;  
x = 3;  
if(x === 3){  
    x = 2;  
    console.log(x);  
}   
console.log(x);   

위의 코드가 된다.  

##  함수
> f();  
function f(){  
    console.log('f');  
}  

위의 코드가  

> function f(){  
    console.log('f');  
}  
f();  

이렇게 된다.