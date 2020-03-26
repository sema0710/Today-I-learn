# react-refetch??
이 요상한 건 또 뭔가... '리액트 디자인 패턴과 모법 사례'라는 책에 나온 서버통신을 위한 라이브러리 중 하나이다.   그럼 이런 의문이 들 것이다. 아니 널리 쓰는 axios 랑 jquery 에는 ajax가 있는데 이걸 왜 써요?  

이걸 굳이 쓰는 이유는, react라는 라이브러리에 잘 맞게 설계되고 동작하기 때문이다. 

```npm 
npm install react-refetch --save
```

이 코드로 react-refetch를 다운받자.

## how to use this?	

그런 다음 이 코드로 connect 함수를 가져온다.

```javascript
import { connect } from 'react-refetch'
```

connect는 component와 서버통신을 연결시키는 역할을 한다.

```javascript
const connetCompoServer = connect(({username})=>({
	url:"serverurl"
}))(componentName)
```

그리고 componentName에는 component를 넣으면 되는데 component의 예시를 보여주겠다.

```javascript
render() {
  const { url } = this.props

  if (url.pending) {
  //url으로 보낸 요청이 pending 상태인가?
    return <LoadingAnimation/>
    //로딩 페이지 return
  } else if (userFetch.rejected) {
    //reject 당했는가?
    return <Error error={userFetch.reason}/>
    // error page return
  } else if (userFetch.fulfilled) {
    //성공인가?
    return <User user={userFetch.value}/>
   	//정상적인 page return
  }
}
```

### how can we send post request to server?

음...위의 예제를 보면 get 요청만 보낼 수 있을 것 같은 라이브러리 같지만 어림도 없다.  

우선, 우리가 axios로 post를 보낼 때, JSON 객체로 요청을 보내지 않는가? 그것마냥 객체를 만들어 보자.  

```javascript
const sendPostReq = connect(({})=>({
	postReq:{
		url:"serverUrl",
		method:"POST",
		data:"data to send to server"
	}
}))(somthing component)
```

요로코롬 보내면 된다.  

## so why we use this library?

우리가 이 라이브러리를 사용하는 이유는 무엇일까?

그냥...좀 복잡한 axios처럼 보이는가?

나도 맨 처음에는 그렇게 생각했지만, react 상에서 구동시켜 보면 다르게 보일것이다.

그렇다, connect에 주어지는 props가 변경될 때 마다, 서버 통신을 다시 즉각적으로 보내게 된다.

이 부분이 "react 스럽다" 라고 말 할 수 있다고 생각한다.



## how to send server request later?

생각해보자, 우리가 server 통신을 보내야 하는데, 특수한 동작 후에 해야한다면 어떻게 할까?

refetch는 props 변경 후에 바로 적용되니, 이런 동작을 못할 것이다. 

이런 부분을 방지하기 위해서 <strong>lazy loading</strong> 이라는 것이 나왔다.

```javascript
const lazyRequest = connect(({})=>({
	lazyReq:()=>({
		mainReq:{
			url:"",
			method:"POST",
			data:"data to send to server"
		}
	})
}))
```

이렇게 하면 mainReq를 반환하는 무명함수를 반환하는 lazyReq를 반환하는 무명함수를 connect에 넣었다.

이렇게 될 경우에는, 함수를 return 하기 때문에, 바로 실행되지 않는다. 그래서 render 에서 실행시켜야 한다.

```javascript
render(){
	const { lazyReq } = this.props;
    lazyReq();
}
```

