# what is react state?
state = 상태  
말 그대로 상태를 관리하는 react 개념이다.  
react state가 변하게 되면, 그 state를 포함하고 있는 components가 새로 render된다.  

사용법 class로 components를 만들 경우에는,
```
    constructor(props){
        super(props);
        this.state = {
            propsName : propsValues,
        }
    }
```
이런 형식으로 state를 설정 할 수 있다.  
만약에 state를 변경해야 하는 상황이 오면
```
this.setState({
    propsName : propsValue,
})
```
이런 형식으로 변경 할 수 있다.

이때, redux의 존재 여부를 다시 한번 깨닫게 된다.  
state관리 하는데, 한 components가 아닌 여러 components를  
포함하는 경우가 잦다. 그런 경우는 redux로 해결한다.

그리고 state가 자주 변경되어서, render가 너무 자주 일어나면  
react 에서 error로 잡아버린다.  
