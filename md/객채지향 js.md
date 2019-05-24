# 객체지향 js  
    일단, 리스트와는 다르게 객체는 순서가 없다.  
# 프로퍼티 나열하는 법(for_in)  
> const o = {a : 1, b : 2, c : 3};  
for(let prop in o){  
    console.log(prop);  
}  
for_in을 사용하면 python에서 사용하던 in 처럼 사용이 가능하다.  
이것의 출력 결과는  
1  
2  
3 이다.  