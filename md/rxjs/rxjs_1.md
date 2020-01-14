# rxjs의 기본 - 옵저버 패턴

![옵저버 패턴](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Observer.svg/854px-Observer.svg.png)

subject에 observer가 연결되어 있는 상태로 이루어져 있다. subject에서 변화가 일어나면 notifyObservers를 실행시켜서 observer들에게 변화를 알려줄 수 있다.



## 자바스크립트의 가장 유명한 observer 패턴

우리가 처음 자바스크립트와 html을 연동할 때, 사용하는 addEventListener가 가장 유명한 예이다.

(완벽하지는 않다.)

``` javascript
function func1(){
	console.log("click1");
}

function func2(){
    console.log("click2");
}

document.getElementById("test").addEventListener("click",func1);
document.getElementById("test").addEventListener("click",func2);
```

만약 이런 코드를 실행하면 test를 누르면 click1 과 click2가 출력 될 것이다.

test의 click event를 계속 관찰하다가 변화가 생기자 위처럼 notifyObservers를 실행시켜서, observer들에게 

변화를 알린 후에, 그 변화에 따른 결과를 출력했다. 



## 함수형 프로그래밍과 순수함수

수학에서 다루는 함수처럼 주어진 값에 고정된 결과를 뱉어내게 하는 것이다.

그래서 함수형 프로그래밍에서의 함수는 뭘 어떻게 하던지 한 값을 넣으면 그에 따른 값만 나와야 한다.  

이러한 특성을 가지고 순수함수라고 한다.  



## 옵저버블 

GoF의 옵저버 패턴에 없는 두가지가 추가된 패턴이 ReactiveX 공식문서에 나오는 옵저버블 패턴이다.

1. onCompleted(더 이상 값이 없음을 알림)
2. onError(에러가 발생함을 알림)

이제부터  rxjs의 메인인 옵저버블, 구독, 연산자, 서브제트, 스케줄러 등에 대해서 설명한다.



| 데이터 처리 방식            | 싱글(하나의 값)   | 멀티플(여러개의 값)  |
| --------------------------- | ----------------- | -------------------- |
| 풀(데이터를 받을 지 결정)   | 함수(function)    | 이터레이터(iterator) |
| 푸쉬(데이터를 보낼 지 결정) | 프로미스(promise) | 옵저버블(observable) |

함수나 프로미스 이터레이터 같은 경우는, 항상 데이터를 처리하는 쪽에서 생산자에게 데이터가 필요하다고 한다.

데이터를 받는 쪽에서 능동적으로(스스로) 데이터를 불러온다.

하지만 옵저버블이나 프로미스는, 데이터를 생산하는 쪽에서 데이터가 있다고 소비자에게 알려준다.

그러므로,  데이터 생산이 끝나며 옵저버든 프로미스든 어쨌든 둘 중 하나를 호출하는 형식으로 이루어져 있다.

## 옵저버블의 라이프사이클

옵저버블 라이프 사이클은 4가지가 있다.

1. creating observables
2. subscribing observables
3. executing the observables
4. disposing observables

생성은 Observable.create(function(){...})으로 할 수 있다.

구독은 Observable.craete를 한 변수에다가 subscribe 함수를 실행시키면 된다.

실행은 subject에 구독했을 때, subject에 있는 실행문이 실행되는 현상

disposing은 끝나는 현상



## 구독 객체 관리하기

observer는 3가지로 분류된다.

 next , error , complete

옵저버블은 각 연산자를 거쳐서 subscribe 함수 안 옵저버로 값을 전달한다.

구독을 멈추는 함수는 *unsubscribe* 이다.

```javascript
const { Observable } = require('rxjs');

const observableCreated$ = Observeable.create(function subscribe(observer){
    const intervalID = setInterval(function(){
        observer.next('hi');
    }, 1000);
    return function unsubscribe(){
        clearInterval(intervalID);
    };
});
```

대체로 이런 형식으로 만든다. 

저런 형식으로 unsubscribe를 구현해서 실행시켜도 된다.

아니면, 밑의 방식처럼 기본적으로 지원해주는 경우도 있다.

여기서 interval은 매개변수의 숫자만큼 기다리고 0에서 1씩 증가시켜서 next를 하는 성질이 있다.

```javascript
const { interval } = require('rxjs');
const observable1 = interval(300);
const observable2 = interval(400);

const subscription = observable1.subscribe(function(x){
    console.log("first :"+x);
})

const childSubscription = observable2.subscribe(function(x){
    console.log("second :"+x);
})

subscription.add(childSubscription);
subscription.remove();

setTimeout(function(){
    subscription.unsubscribe();
},1000);
```



## 서브젝트

서브젝트는 멀티캐스팅을 지원하는 옵져버블 객체다.

Subject라는 객체를 생성 한 후에, subscribe 함수로 여러가지 옵저버 function에 등록 한 후에, 

next함수로 호출해주면, 등록한 모든 observer에서 값을 전달 받을 수 있게 된다.

