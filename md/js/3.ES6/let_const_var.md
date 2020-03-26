# var? let? const
## let과 var과 const의 차이점을 알아보자.  

## var의 문제점들..  
1. 중복선언 가능  
js에서 var은 중복선언이 가능하다.  
> var a = 3;  
var a = 2;  

이런 뭣같은 코드가 나와도 아무런 에러가 없다.

2. hoisting
js에서의 var은 hoisting이 된다.
hoisting은 hoisting.md에서 공부할 것
그리고 var은 함수단위로 값이 살아있다.  
함수 레벨 스코프 이다.  
하지만 let을 쓰게 되면 다른 언어들과 같게 블록 레벨 스코프이기 때문에 let을 자주 쓴다.  
> var x = 0;
{
  var x = 1;
  console.log(x); // 1
}
console.log(x);   // 1

let y = 0;
{
  let y = 1;
  console.log(y); // 1
}
console.log(y); 

## 이것들의 문제점을 보완한 것이 let,const이다.

* let -->  var처럼 앞에 자료형까지 쓰면서 선언은 불가능 하지만 그냥 자료 수정은 가능하다.
* const --> 그냥 한번 선언하면 재선언은 개뿔 자료 수정도 안된다.

* let,const --> hoisting이 되긴 되는데 정확한 기준을 모르겠다.
