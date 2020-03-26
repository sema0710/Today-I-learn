# 함수 선언식 vs 함수 표현식

## 함수 표현식이 뭘까?
` const func = function(){} `  
` const func2 = ()=>{} `  
이런 형식으로 function을 호출하는 것을 <b style="color:orange">"함수 표현식"</b> 이라고 한다.

## 함수 선언식은 또 뭐야?
` function func(){}`  
이렇게 function을 호출하는 것을 <b style="color:orange">"함수 선언식"</b> 이라고 한다.

## 뭐가 다른데 이렇게 나눴어?

함수 표현식과 함수 선언식은 확실한 차이가 있다.  

` func1() `  
` func2() `  
` const func1 = function(){ ... } `   
` function func2(){ ... } `  
이런 코드를 실행할 경우 func1은 undefined가 뜨면서 error가 발생한다.  
왜냐하면, func는 호이스팅이 되지 않았기 때문이다.  
const는 당연히 호이스팅 안된다.    
하지만 func2는 에러가 안난다. function은 호이스팅이 되기 때문이다.  

## this binding
<b style="color:orange">!주의! 정확하지 않은 정보!</b>  
()=>가 함수 표현식이라고 한다.  
()=>는 binding이 부모 객체에 된다.
삼단논법으로 보면,  
1. ()=>는 함수 표현식이다.  
2. ()=>는 binding이 부모객체에 된다.  
3. 따라서 함수 표현식의 this binding은 부모객체에 된다.