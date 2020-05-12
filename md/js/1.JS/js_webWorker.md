# web worker

자바스크립트는 기본적으로 단일 스레드 언어이다.

call stack으로 event 및 연산을 처리하기 때문에, 동시에 다른일을 처리할 수 없다.

하지만 javascript 가 싱글 스레드 인것이지, 브라우저는 아니다.

엄연히 운영체제 위에서 굴러가고 있으므로, 여러개의 스레드를 이용할 수 있다.

이런 이점을 이용해서 javascript이지만, 여러개의 일을 동시에 할 수 있는 방법이 있다.

## web worker 사용법

```js
// worker.js

const test = 10;
// 길고 어려운
// 오래걸리는 코드들...
postMessage(result);
```

```js
// main.js
const worker = new Worker('worker.js');
worker.addEventListener('message',(e)=> {
    console.log(e.data);
    worker.terminate();
})
```

1. main.js에서  worker.js의 코드를 worker에 넣고 돌린다.
2. worker.js에 많은 코드들이 끝나고, postMessage() 매개변수에 return 할 값을 넣는다.
3. postMessage가 실행되면 worker가 끝나고, message event가 발생한다
4. eventListener에서 message event를 감지하고 그에 맞는 행동을 한다
5. worker를 삭제해야 하는 상황이면 worker.terminate()를 실행한다.