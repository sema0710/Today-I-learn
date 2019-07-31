js의 객체지향을 책임지는 prototype에 대해서 알아보자

## what is the prototype?

prototype은 function이 new로 객체를 만들 때 복사해 오는 프로퍼티 이다.

객체들은 항상 prototype을 가지고 있다.

그리고 prototype으로 복사한 object와 생성자 object(복사해 온 function)는

prototype으로 연결되어 있다.

## how to use a prototype?

출처 : [https://opentutorials.org/module/532/6573](https://opentutorials.org/module/532/6573)

이 코드가 prototype을 보기에는 좋은 코드 같아서 들고왔다.

    function Ultra(){}
    Ultra.prototype.ultraProp = true;
     
    function Super(){}
    Super.prototype = new Ultra();
     
    function Sub(){}
    Sub.prototype = new Super();
     
    var o = new Sub();
    console.log(o.ultraProp);

Ultra의 prototype 안에 ultraProp을 true로 주었다.

Super function을 만들었는데, Super의 prototype을 Ultra로 주었다.

Sub의 prototype을 super로 주었을 때, 이것은 Ultra를 prototype으로 주는 것과 같다.

다시 이 sub을 o에 new로 복사하게 되면, o의 prototype은 Ultra가 된다.

그래서 log값은 true가 나온다.

각각의 object들은 생성자에서 가져온 prototype을 __ proto __ 에 저장하게 된다.

## what is the dispatch?

dispatch는 객체의 메서드나 프로퍼티가 존재하지 않으면 객체의 포로토타입에서 프로퍼티나 메서드를 찾는 것을 의미한다.
    

