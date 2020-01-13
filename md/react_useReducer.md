# useReducer

### 흠? Reducer? 어디서 많이 보지 않았어요?

그렇다, redux에서 많이 본 녀석이다. event를 정의하는 부분인 것을 기억하고 있으면,

이 글을 이해하기 더 쉽다. 

이 녀석은, redux에 있는 reducer를 더 쉽게 만들 수 있게 해주는 녀석이다.

### 어떻게 써요?

useState와 비슷하게 사용 할 수 있지만, 매개변수가 조금 들어간다.

우선 reducer 만드는 것 처럼 function을 만들어 보자.

```javascript
function reducer(info, action){
	switch(action.type){
		case 'add':
			return info.concat(action.info);
		case 'del':
			return info.filter(info => info.id !== action.id);
	}
}
```

이렇게 function을 만든 후에,

```javascript
const [info,dispatch] = useReducer(reducer,초깃값);
```



하면 된다. 그리고 이 함수를 실행 할 때에는,

```javascript
dispatch({type: 'add', info:info});
```

이렇게 event를 줄 수 있다.