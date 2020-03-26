# scope and closure

## what is scope?

어떤 구역에서 변수에 접근 할 수 있는지를 판별 할 수 있게 한다.

## 전역 스코프

{} 밖에 적혀있는 변수나 코드들을 전역 스코프에 있다고 한다.

전역 스코프에서 변수를 선언 할 경우에는 전역변수로 처리된다.

하지만 다른 언어와 같은 이유로, 전역변수는 사용하지 않는 것이 좋다.

특히 js에서는 var은 같은 이름으로 있어도, overwrite되기 때문에, 잘못쓴 것을 판별하기 어렵다.

## 지역 스코프

코드에서 특정 부분에서만 사용 할 수 있는 변수를 지역 스코프 안에 있다고 한다.

그 종류는 두가지가 있다.

- 함수 스코프

    말 그대로 함수를 만들 때 사용하는 {} 안에 있는 변수를 의미함

    함수 안에 변수를 선언하게 되면,  전역 스코프에서는 호출 불가능

    아에 지역과 전역을 따로 두기 때문에, 같은 이름의 변수도 선언이 가능하다.

        function a(){
        	let test = "test"
        }
        console.log(test)

- 블록 스코프

    아무것도 없고 그냥 전역스코프에 {}를 만들고 그 안에 코드를 짜는 형식

    함수 스코프와 같이 안에서만 호출이 가능하게 만듬

        {
        	let a = 100;
        	const birth = 20030710;
        	console.log(birth)//20030710
        }
        console.log(birth)//Error

## 함수는 다른 함수의 변수에 접근 할 수 없다.

당연한 말 인것 같지만, 다른 함수에서 함수의 변수에 접근이 불가능하다.

    function a(){
    	let a;
    }
    
    function b(){
    	console.log(a)//Error!
    }

### 하지만 함수 이내에 선언된 함수는 외부 함수의 변수에 접근 할 수 있다.

렉시컬 스코핑(lexical scoping)이라고 한다.

    function a(){
    			let a = 10;
        function b(){
    	    console.log(a);//10        
        }
    }

## 보면 한방에 이해가는 그림과 코드

[!img](https://www.notion.so/junsangcloud/scope-and-closer-09f9ed39e5884a6e8616719c464206d5#1615ca2c709e417b880aac2ccb6f3617)



    //global
    function Outermost(){
    	function Inner(){
    		function Innermost(){
    			...
    		}
    	}
    }

# closure

아래의 코드를 보면, myFunc에서 displayName을 return 하게 되는데,

return 값과 환경적인 부분(ex: name변수)가 남아있게 된다.

만약 closure가 아니였다면, undefind가 나와야 정상인 코드가 ,

Mozilla가 나오는 모습을 볼 수 있다.

    function makeFunc() {
      var name = "Mozilla";
      function displayName() {
        alert(name);
      }
      return displayName;
    }
    
    var myFunc = makeFunc();
    //myFunc변수에 displayName을 리턴함
    //유효범위의 어휘적 환경을 유지
    myFunc();
    //리턴된 displayName 함수를 실행(name 변수에 접근)

아래의 코드가 더 좋은 코드이다.

makeAdder는 function을 만드는 코드이다.

add function을 만들 때, 안의 function(z){...}가 살아있게 된다.

그래서 add5(2)를 주면 매개변수로 넘겼던, x , z와 원래 y가 더해셔저 107이 나온다.

    function makeAdder(x) {
      var y = 1;
      return function(z) {
        y = 100;
        return x + y + z;
      };
    }
    
    var add5 = makeAdder(5);
    var add10 = makeAdder(10);
    //클로저에 x와 y의 환경이 저장됨
    
    console.log(add5(2));// 100 + 5 + 2
    console.log(add10(2));// 100 + 10 + 2

### 조금 더 현실적인 예제

    function makeSizer(size) {
      return function() {
        document.body.style.fontSize = size + 'px';
      };
    }
    
    var size12 = makeSizer(12);
    var size14 = makeSizer(14);
    var size16 = makeSizer(16);

## private 변수에 접근하기

    function secret (secretCode) {
      return {
        saySecretCode () {
          console.log(secretCode)
        }
      }
    }
    
    const theSecret = secret('CSS Tricks is amazing')
    theSecret.saySecretCode()