# what is the promise?

javascript에서는 callback function을 이용하여 값을 넘기고 그 값을 또 넘기는 방식이 일어난다.  

예를 들면..

    function test(
     function(
      function(
       function(function(){
         return 1;
		  }){
    	}){
       }
      ){
          ...
      }
    )

이런 형식으로 function이 이루어질 때가 많다.

이런 방식으로 callback 함수를 구성할 경우에는 코드의 가독성이 떨어진다.

# how to use promise?

밑의 코드는 promise의 가장 대표적인 예시이다.

    new Promise(function(resolve, reject){
      setTimeout(function() {
        resolve(1);
      }, 2000);
    })
    .then(function(result) {
      console.log(result); // 1
      return result + 10;
    })
    .then(function(result) {
      console.log(result); // 11
      return result + 20;
    })
    .then(function(result) {
      console.log(result); // 31
    });

코드 출처 : [https://joshua1988.github.io/web-development/javascript/promise-for-beginners/](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)

이렇게 되면, function으로 구현할 경우에는 call stack function을 사용해야 하는 것을 간단하게 promise로 구현이 가능하다.

해석하자면, promise 객체를 만드는데 매개변수로 function을 준다. 

비동기를 모방하기 위해서 setTimeout을 사용하였다. 

(promise는 비동기 통신할때 사용을 자주함)통신에 성공하면 resolve에 1을 넣어준다.

그게 성공하였으면, 첫번째 then을 돌린다. 이 then은 function을 매개변수로 받는다.

result는 위의 resolve에 넣어준 1이 된다.

이제 result에 10을 더해서 return 해준다. 그 이후에도 result를 방금 return한 값을 받고 20을 더하고 반환하고 다시 받아서 출력하는 코드이다.