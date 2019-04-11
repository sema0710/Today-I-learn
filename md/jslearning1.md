# js의 특징
* 단일쓰레드
* 콜백 큐를 이용
# v8 엔진
    v8엔진은 크게 2부분으로 구성된다.  
    메모리힙과 콜스택으로 이루어진다.  
    메모리힙은 메모리 할당이 이루어지는 곳이다.  
    콜스택은 코드가 실행되면서 스택 프레임이 쌓이는 곳이다.   
    c언어로 치면 스택 느낌이 난다.  
# 런타임
    js의 실행은 어떻게 이루어 지는가?
<img src="https://cdn-images-1.medium.com/max/1000/1*i9nTlOSPH3q-sCd5-WHg-g.png">
    js에는 web API,eventloop,callbackqueue가,엔진 등이 있다.  

# 콜스택
    자바스크립트는 싱글 쓰레드 프로그래밍 언어라고 한다. --> 콜스택이다 --> 한번에 하나의 일만 할 수 있다.  
>function multiply(x, y) {    
    return x * y;    
}    
function printSquare(x) {    
    var s = multiply(x, x);    
    console.log(s);    
}    
printSquare(5);    
이 코드를 실행하면 밑의 사진처럼 된다.
<img src="https://cdn-images-1.medium.com/max/1000/1*1FL2WcODqRrK40rrzA5QQA.png">
만약 스택이 넘쳐 흐를 경우에는 에러가 나면서 잘린다..?  
# 동시성과 이벤트 루프
    만약 콜스택에 수행시간이 긴 함수가 있으면 에러가 나버린다.  
    그 이유는 그 함수만 계속 잡고 있으면 블로킹이 되기 때문이다.  
    그 이유 때문에 비동기 콜백이 필요한 이유다.

# 단일 쓰레드의 단점
    단일 쓰레드 --> 동기처리?
    단일 쓰레드를 이용할 경우 어떤 함수나 이벤트가 실행중일때 아무것도 하지 못한다.  
    이런 상태를 블로킹 되었다고 한다.
# 타이밍 조정하기
> var response = ajax('https://example.com/api');
> console.log(response);  
    //이 코드는 비동기 처리가 되지 않는다.

> function first() {  
    console.log('first');  
}  
function second() {  
    console.log('second');  
}  
function third() {  
    console.log('third');  
}  
first();  
setTimeout(second, 1000); //1초 이후에 실행되는 타임아웃 이벤트를 만듬
third();  
    //이건 first와 second가 나오고 third가 1초후에 나오게 된다.  
하지만 이건 그냥 특정한 타이밍에 실행되게 하는 것 뿐임

# callback
<img src="https://cdn-images-1.medium.com/max/1000/1*FA9NGxNB6-v1oI2qGEtlRQ.png">
이 사진은 js파일의 구성요소 입니다     -->? 검증 필요  
<img src="https://cdn-images-1.medium.com/max/1000/1*KGBiAxjeD9JT2j6KDo0zUg.png">
이건 event loop라고 하는 것 입니다. 이벤트 루프는 콜스택과 콜백큐를 관리하는 놈이다.  
콜스택이 비었다면 이벤트 루프가 첫번째 이벤트를 콜스택에 넣는다.  
이러한 반복을 틱이라고 부른다.
만약 콜스택이 비어있고 모든것이 깨끗한 상황에서 이 코드를 실행시켜보자.

> console.log('Hi');  
setTimeout(function cb1() {   
    console.log('cb1');  
}, 5000);  
console.log('Bye');  

이 코드를 정리하면 이렇게 된다.
<img src="https://cdn-images-1.medium.com/max/1000/1*TozSrkk92l8ho6d8JxqF_w.gif">
    내가 이해한 것이 맞다면....   
1. console.log('hi');가 callstack에 들어갔다가 console에 출력 된 후에 callstack에서 나온다.  
2. setTimeout(function cb1(){...})가 callstack에 들어가는데, 5초 후에   console.log('cb1'); 이 실행되게 api에 넣었다. 그 후에 callstack에서 나간다.
3. console.log('bye');가 callstack에서 들어간 후에 실행 후 나간다.
4. 5초 후에 console.log('cb1');이 callstack에 들어가고 실행된다. 그리고 callstack에서 나간다.
# settimeout()의 작동방식
    settimeout()은 시간이 지난 후에 callback에 넣어놓는다.
    그래서 틱이 callback에서 가져오게 하는 것같다..?
    그래서 setTimeout()을 0초로 해도, callback에 들어가기 때문에 다른 것들이 실행 된 후에 
    setTimeout()에 있는 것이 실행된다.

# 중첩콜백
>listen('click', function (e){  //1번으로 실행됨  
    setTimeout(function(){  //2번으로 실행됨  
        ajax('https://api.example.com/endpoint', function (text){ //3번으로 실행됨  
            if (text == "hello") {  //4번으로 실행됨
	        doSomething();  
	    }   
	    else if (text == "world") {  
	        doSomethingElse();  
            }  
        });  
    }, 500);  
    });  
  

# 진행중....이거 너무 길어요 ㅠㅜㅜㅜㅠㅜㅠㅜㅠㅜㅠㅜㅠㅜㅠ
   


