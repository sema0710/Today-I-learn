# rest 파라미터

## rest 파라미터? 그게 뭔데?

처음들어보죠? 예 저두요.  
github를 뒤지다가 "..." 라는 문법이 나오길래, google에 쳐봤죠.  
그랬더니, rest 파라미터라는 mdn 문서를 뒤져봤습니다.  
그래서 이 문서의 모든 지식은 mdn 공식문서에서 나옵니다 ^^  
출처 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters  

일단 결론부터 얘기하자면, rest파라미터는 모든 따로 이름붙여지지 않은 파라미터들을 배열로 받아오는 문법입니다.  

## 그래서 어떻게 써요?
ez해요.
```
function restTest(a,b,c,...d){
    console.log(a,b,c,...d);
}

restTest(1,2,3,4,5,6,7,8,9,10);
// 1,2,3,[4,5,6,7,8,9,10]
```

이렇게 됩니다.  

그리고 rest파라미터는 해체 할 때도 사용해요  
```
function f(...[a, b, c]) {
  return a + b + c;
}

f(1)          // NaN (b 와 c 는 undefined)
f(1, 2, 3)    // 6
f(1, 2, 3, 4) // 6 (4번 째 파라미터는 해체되지 않음)
```
출처 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters  

## 결론
rest파라미터는 잘 쓰면 매우 편해지는 문법 중 하나에요.  
알고 있는 것을 추천합니다.  
    