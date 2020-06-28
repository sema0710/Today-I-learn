# Javascript EventListenerOptions

javascript에 새로운 event option을 지원하겠다고 chrome이 발표했다.

이제 eventListner를 생성할 때 3가지 속성을 지정해 줄 수 있다.

1. capture
2. once
3. passive

## Capture

capture는 event의 capturing이 발생하지 않게 막아주는 속성이다.

### what is Capturing

capturing은 browser에서 event가 일어날 때 생기는 현상으로,

div element가 있고, 그 안에 p element가 있을 때, p element 클릭 시에,

div element click을 거치고 p click event가 실행되는 현상이다.

그 이후에는 반대로 bubbling이 실행된다.

## Once

이벤트 핸들러를 한번만 실행되게 해주는 속성이다.

한번 호출 후에 handler를 삭제시킨다.(가끔 쓰이고 매우 편리하다)

## Passive

"수동적인" 이라는 뜻이다. 

listener에서 preventDefault() 를 호출하지 않겠다는 것을 알려주는 boolean값이다.

만약 passive가 true로 설정되었지만 preventDefault() 를 실행할 경우에는 

단지 콘솔에 경고를 띄울 뿐 다른 작업은 하지 않는다.