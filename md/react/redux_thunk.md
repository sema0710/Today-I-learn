# redux_thunk

### thunk란?

thunk는 어떤 행위를 나중에 할 수 있게 함수로 감싼 형태를 의미합니다.

### example

const adder = (x,y) => x + y; 

이런 함수가 있다고 치면, 이 행위를 나중에 하고 싶어지면, 함수로 묶어버리면 된다는 것이다.

``` js
const wrapper = () => (x,y) => x + y;
```

이런 thunk를 react-redux에서 사용하기 편하게 만든 것이 redux_thunk이다.



### redux_thunk

thunk함수를 만들어서 dispatch 할 수 있게 해준다.

