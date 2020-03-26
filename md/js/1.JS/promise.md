# what is promise?

우리가 비동기 처리에서, 순서를 지정하려면 사용하는 콜백,  
이 콜백은 사용량이 많아지면, 가독성이 매우 현저하게 떨어진다.  
```
step1(function(value1) {  
    step2(value1, function(value2) {  
        step3(value2, function(value3) {  
        step4(value3, function(value4) {  
            step5(value4, function(value5) {  
                // value5를 사용하는 처리  
            });  
        });  
        }); 
    });
});
```
더러운 코드;;;

그래서 promise라는 것이 나오게 되었다.

# how to use promise?

promise는 객체 이다.  
매개변수가 resolve와 reject인 함수를 매개변수로 받는다.    
let promise = new Promise((resolve, reject) =>{...});

그리고, 만약 성공하게 된다면 resolve에 성공값을 넣어주면 된다.
실패하면 reject에 실패값을 넣어주면 된다(혹시나 해서 얘기하지만 매개변수는 이름 바꾸면 달라지는 거 아시죠?)  

```
let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout(function(){
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
});
```





