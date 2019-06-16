# prototype in js  
## what is the prototype?
    도대체 prototype이 무엇인가?  

    prototype이 사용되는 예를 먼저 들어보자.  

    prototype은 js에 class가 없던 시절, class를 따라하기 위해서 function과 객체를 이용 할 때,  
    class를 사용할 때 처럼 몇백개를 만들게 되면, 메모리가 터질 것이다(변수가 계속 생성되기 때문에)  

    그래서 prototype이 만들어 졌다.  

    이 prototype은 object다(객체)   

    사람들이 function의 prototype 객체에 여러 값들을 넣는다.  

    ex) func.prototype.sth = 10;// --> protype 안에 sth라는 key값을 가진 요소에 10을 넣는다.  

## prototype object
>function test(){}//함수를 정의
let test1 = new test;// test1에 test 함수로 객체를 생성

    저때 function을 정의할 때 constructor(생성자) 자격을 부여하게 된다.  
    이렇게 constructor 자격이 부여되기 때문에 new 로 객체를 생성 할 수 있는 것입니다.  
    그리고 위에서 prototype은 object로 되어 있다고 했는데, function이 생성될 때 함께 생성된다.    

!["prototype 구조"](https://cdn-images-1.medium.com/max/1000/1*PZe_YnLftVZwT1dNs1Iu0A.png)
    function안의 prototype이 prototype object를 가리키고, constructor와 __proto__가 function을 가르킵니다.  
    new로 객체를 만들면 prototype이 그대로 남기 때문에, function에서 prototype 안에 값을 넣으면  
    function에서 나온 객체에서도 prototype을 사용 할 수 있습니다.

## prototype link
    객체 안에 속성은 __proto__밖에 없다.
    그런데 이 __proto__는 prototype object를 가리킨다.  
    그래서 만약 객체 이름이 test면, prototype object 안에 있는 요소들을 끌어 올 수 있다.   
    

