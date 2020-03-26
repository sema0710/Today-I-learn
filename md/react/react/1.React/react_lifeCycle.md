# react에서 lifeCycle

## so, what is lifeCycle in react?

lifeCycle은 컴포넌트가 생성되고, 소멸될 때 까지를 의미한다.  

## so, why lifeCycle exist?

lifeCycle에 맞는 methods들이 있는데, react components들을 구성할 때,   
필수적으로 들어가야 하는 methods들이다.

## example

render()  
화면에 components or text를 return 하는 methods이다.  

  
constructor()  
classical react components가 mount되기 전에 실행되는 methods이다.  
이곳에서만 this.state를 이용하여, state를 정의 할 수 있다.  
setState()를 실행 할 수 없다.  

componentWillMount()  
React element를 실제 dom 노드에 넣기 전에 실행되는 코드.

componentDidMound()
element가 dom에 들어가면 실행되는 코드.

shouldComponentUpdate(nextProps, nextState)  
element update 직전에 실행되는 methods  
return값으로, 재랜더링 여부를 판단할 수 있다.    

componentDidUpdate(prevProps, prevState)  
sholdComponentUpdate가 실행된 이후에 실행되는 methods  
여기서 this.setState()를 사용하면 무한루프가 생긴다.  

componentDidUpdate()  
컴포넌트 updatae이후에 실행되는 methods   

componentWillUnmount()  
컴포넌트 삭제 전에 실행되는 methods  

componentDidCatch()  
컴포넌트에서 error발생 시 실행되는 methods   
특이하게, 자신의 error는 잡아 낼 수 없다.

