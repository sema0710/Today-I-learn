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

# v8 엔진의 특징
    v8엔진에는 2개의 컴파일러가 있었다.
* 풀코드젠 : 간단하고 빠른 컴파일러 상대적으로 느림  
* 크랭크샤프트: 좀 더 복잡한 최적화된 컴파일러이다.
    또한 여러개의 쓰레드를 사용한다.  
    메인 쓰레드가 코드를 가져와서 실행한다.  
    컴파일을 위한 별도의 쓰레드가 있어서 코드를 최적화 하는동안 메인 쓰레드는 계속 일한다.  
크랭크샤프트가 최적화를 하는법 

* 인라이닝  
    그냥 함수가 호출되있는 곳에 그 함수의 코드를 그 부분에 넣는다. 

* 히든 클래스  
    java와 같은 언어에서 쓰는 class와 비슷하다만 실행시에만 생성된다는 차이점이 있는 것.  

* 인라인 캐싱  
    같은 메소드에 대한 반복호출은 같은 타입의 객체에서 이루이는것? --> 다른 자료를 찾아볼 것  

* 머신코드로의 컴파일  
    최적화 되지 않은 파일을 실행했을 때 그 코드를 잊어버리지 않고 기억하는 것 같다.   
    그 다음 최적화된 버전으로 갈아타게 한다?? --> 자료 필요

* 가비지 컬렉션  
    옛날에 사용하던 코드를 지워버리는? 느낌인데..  
    아에 모든 코드를 훑는것이 아니고 힙만 살짝   보는 것으로 확인한다. 그러므로 실행은 계속된다.  

* 이그니션과 터보팬  
    메모리 성능을 높이는 것..?

# 최적화된 js 코드를 작성하는 법  
* 객체 속성의 순서: 객체 속성을 항상 같은 순서로 초기화해서 히든클래스 및 이후에 생성되는 최적화 코드가 공유될 수 있도록 해야한다 .  

* 동적 속성: 객체 생성 이후에 속성을 추가하는 것은 히든 클래스가 변하도록 강제하고 이전의 히든클래스를 대상으로 최적화되었던 모든 메소드를 느리게 만듭니다. 대신에 모든 객체의 속성을 생성자에서 할당한다.  

* 메소드: 동일한 메소드를 반복적으로 수행하는 코드가 서로 다른 메소드를 한 번씩만 수행하는 코드 보다 더 빠르게 동작한다.

* 배열: 값이 띄엄띄엄 있어서 키가 계속해서 증가하는 숫자가 되지 않는 배열은 피하는게 좋습니다. 모든 요소를 가지지는 않는 배열은 해시테이블입니다. 이와 같은 배열의 요소들은 접근하기에 많은 비용이 듭니다. 또한 커다란 배열을 미리 할당하지 않도록 하십시오. 사용하면서 크기가 커지도록 하는 게 낫습니다. 마지막으로 배열의 요소를 삭제하지 마십시오. 그 배열의 키가 띄엄띄엄 배치됩니다.

* 태깅된 값: V8은 객체와 숫자를 32비트로 표현합니다. 어떤 값이 오브젝트(flag = 1)인지 혹은 정수(flag = 0)인지는 SMI(Small Integer)라는 하나의 비트에 저장하고 이 때문에 31비트가 남습니다. 따라서 어떤 숫자가 31비트 보다 크면 V8은 이 숫자를 분리해서 더블 타입으로 전환한 다음 이 숫자를 넣을 새로운 객체를 생성합니다. 이러한 동작은 비용이 높으므로 가능한 한 31비트의 숫자를 사용하도록 하십시오
//여기 있는 코드는 ctrl c + v 를 활용하였습니다.
//도저히 뭐라는지 모르겠어서....

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
  


   


