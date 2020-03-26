# redux

## 리덕스? 그게 뭐야?

우리가 react로 프로덕트를 만들 때, 모든 component를 상대로 state를 줘야 하는 상황이 가끔씩 일어나기도 한다.   
그게 맨 상위 component에서 일어난다면, props로만 주면 되지만, 만약 중간이나 단말 component이면, 
state를 변경하는 function을 계속 넘겨서 state를 변경시켜 주어야 한다.  
![redux](https://res.cloudinary.com/practicaldev/image/fetch/s--ODj86ijB--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/axnmkq4b19fxeso4lb7z.png)
그게 힘들어서 store에 모든 state를 관리하게 하는 것이다.  

## 그래서 redux 그거 어떻게 쓰는거야?

우선 redux를 쓰려면, state가 변경 불가능이어야 한다.  
그럼 어떻게 state를 update하는가? 그건 state 객체를 복사한 후에, 값을 변경 한 후 통째로 바꾸어 주면 된다.  
그리고 이런 state 변경은 action이 일어나야 변경된다.  
action은 사용자가 미리 정해 둘 수 있다. redux action의 이름은, 동사 위주로 짓는것이 좋다.  
ex) ADD_COLOR , RATE_COLOR  
그리고 이런 action에 따라서 state를 변경시켜주는 reducer라는 것이 있다.  
reducer는 component가 주는 action에 따라서 state를 변경시켜주는 놈이다.  
예시를 들어 보겠다.

```
const counterInitialState = {
    value: 0,
    diff: 1
};

const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        default:
            return state;
    }
}

```

위의 코드를 보면 state가 첫번째 매개변수로 그 뒤로 action이 들어가고, 그 action에 따라서,
state를 복사 , 변경하여 return 해주는 것을 확인 할 수 있다. 그리고 state가 들어가지 않으면 기본으로 conterInitialState로 초기화 하는 것을 볼 수 있다.  

그리고 이 reducer를 하나로 합쳐서 export 해준다.
```
const counterApp = combineReducers({
    counter
});

export default counterApp;
```
이 코드에서 combineReducers는 뜻 그대로, 그냥 reducer를 하나로 합쳐주는 것이다.  


이걸 store로 만들어서, component에서 dispatch로 action을 넘겨줄 경우, reducer에서 action을 인식해서, state를 변경한다.  