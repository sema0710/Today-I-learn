# Immutability

## 그래서 불변성이 뭔데?
불변성이란, 객체 생성 이후에 더 이상 변경 될 수 없게 하는 디자인 패턴을 의미한다.

## 음? 이걸 react에서 어따가 써먹지?
처음볼 때만 해도, "그냥 const쓰면 되는거 아녀? 어따 써먹지?"   
이렇게 생각 했었지만, 오산이였다.  
state가 변경되면 render함수가 다시 실행되는 것은 알 것이다.  
그 render에 조건을 다는 method가 shoudComponentUpdate이다.  
그런데 이것을 사용할 때, 불변성을 유지하지 않는다면?  
state를 하나하나 비교하면서 바뀐점이 있는지를 검사해야 한다.  
하지만, 불변성이 유지되면, === 하나로 비교가 가능해 진다.  
그래서 훨씬 코드가 간단해지고, 속도가 빨라진다.  

## 그래서 불변성을 어떻게 유지하면 되나요?

간단해요, 맨 처음 state의 형태를 유지 하면서 setState를 사용하면 됩니다.
```
state = {
    test : "hello!",
    user : {
        user1 : "junsang",
        user2 : "pandati",
    }
}
```
일 경우에 user1을 변경할 때,
```
this.setState({
    user."user1" = "hello",
})
```
가 아니라
```
this.setState({
    test : "hello!",
    user{
        user1 : "sdfasdf",
        user2: "pandati",
    }
})
```
이렇게 바꿔주면 되는 것이다.  
