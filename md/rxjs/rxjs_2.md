### 스케줄러

스케줄러는 옵저버가 옵저버블을 구독할 때 어떤 순서로 어떻게 실행 할지 

실행 컨텍스트를 관리하는 역할의 자료구조라고 할 수 있다.

| 비동기                 | 동기           |
| ---------------------- | -------------- |
| setTimeout,setInterval | queueScheduler |

### 마블 다이어그램

![Image result for Reactive x"](http://reactivex.io/documentation/operators/images/to.c.png)

이런 사진을 마블 다이어그램이라고 한다.

이런 사진을 통해 우리가 얻을 수 있는 정보는, To라는 연산자는 정보를 받고, 성공적으로 complete가 나면,

그 정보를 묶어서 complete낸다는 것을 알 수 있다.