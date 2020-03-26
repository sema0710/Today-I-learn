# react immer

### react immer?

![Image result for react immer"](https://css-tricks.com/wp-content/uploads/2019/08/immer-react.png)

이게  immer + react의 문양이다.

react 개발자가 이제 react 개발 공부 시작한다 할 때, 공부하는 게 불변성이라고 생각한다.

불변성을 유지하게 되면, 여러가지 이익이 있는데, 우선 이전 상태나 props와 현재 props나 상태를 비교하면,

새로운 객체를 만들어서 값을 변경하기 때문에, 무조건 false가 나온다.

이전과 같은 객체면 === 연산을 했을 때, 무조건 true가 나오기 때문이다.

이 immer는 이런 불변성을 유지하기 쉽게 해준다.

### 그래서 이거 어떻게 써요?

immer를 npm으로 다운받는 것을 먼저 해야한다.

```
npm i immer
```



npm으로 다운받았는가?

그러면 인터넷을 뒤지다 보면, immer는 produce라는 함수를 기본으로 export 하는 것을 알 수 있다.

이제 밑의 코드를 보면 사용법을 알 수 있다.

```javascript
import produce from 'immer'

const [data, setData] = useState([{
	user:"",
	id:1,
},]);

setData(
	produce(originalState, draft =>{
		draft.array.push({
			user:"sema",
			id:draft[0].id + 1,
		})
	})
)
```

이런 식으로 state를 변경 할 수 있게 된다.

그리고 만약에 첫번째 매개변수에 function을 넣게 되면, 업데이트용 function 을 return 한다.

그래서 이런 식으로도 활용이 가능하다.

```javascript
import produce from 'immer'

const [data, setData] = useState([{
	user:"",
	id:1,
},]);

setData(
	produce(draft =>{
		draft.array.push({
			user:"sema",
			id:draft[0].id + 1,
		})
	})
)
```

쓸모없는 매개변수를 받지 않아도 사용할 수 있게 한다.



### 이 라이브러리를 쓸 곳과 안쓸 곳

이 라이브러리는, state구조가 복잡한 부분에서는 사용하는데 매우 큰 이점이 있다.

하지만 단순한 state구조를 가지고 있다면, 그냥 새로운 객체를 만들어서 불변성을 유지하는게 좋다.