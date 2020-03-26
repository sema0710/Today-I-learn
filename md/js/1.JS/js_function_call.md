# call_in_function
## what is call?
> (i) => {
    console.log(i);
}

여기 무명함수가 있다. 무명함수는 대부분, 함수를 매개변수로 받는 함수에서 사용한다. 하지만, 이런 함수를 실행시켜야 할때는 어떻게 사용해야 하는가?  
그럴때는 즉시 실행 함수로 만들어 버린 후에, call을 사용해 보자.
> ((i) => {
    console.log(i)
}).call("?",2);

하지만 call은 원래 이런 목적이 아니다. call은 this와 함께 사용하는 함수이다.  
> let test = {name:"sema",class:"2"}; 
((i) => {
	console.log(i);
	console.log(`{this.name this.class}`);
}).call(test,3);

이 코드를 보게 되면, call함수의 첫번째 매개변수는 this값이 될 객체를 넣어주면 된다.  
