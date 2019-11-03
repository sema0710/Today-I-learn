# js에서의 자료형
* let --> 같은 이름을 한번만 사용 할 수 있다.
* var --> 같은 이름을 여러번 사용 가능하다.
* const --> 상수로 만들어 버린다.

# const에서 사용할 수 있는 것들
const bigint = Number.MAX_SAFE_INTEGER; --> 표현할 수 있는 가장 큰 정수
const max = Number.MAX_VALUE; --> 표현 할 수 있는 가장 큰 수
이것보다 많은 것들이 있지만 딱히 쓸모 없을듯

# 리터널? 식별자?
    리터널 --> 변하지 않는 값,고정된 값(ex)숫자,문자열,문자 등 --> ""가 있거나 숫자로 시작한다.
    식별자 --> 함수나 변수명과 같은 것들 --> 앞이 숫자로 시작하지 않고 ""가 없다.

# 원시 타입과 객체
    자바스크립트에서 값은 원시값 또는 객체라고 부른다.
* 숫자
* 문자열
* 불리언(boolean)
* null
* undefined
* symbol(심볼)
* 숫자
# js에서의 객체
    js에서 기본적으로 제공해주는 객체에는 아래의 것들이 있다.
* array
* data
* RegExp
* Map,WeakMap
* set,Weakse

# 특수문자 + 이스케이프 시퀸스
\n 줄바꿈 문자  
\r 캐리지 리턴  
\t tap  
\' 작은따옴표 출력  
\" 큰따옴표 출력  
\` 백틱?  
\$ $출력  
\\ 역슬래쉬 출력  
\uXXXX 임의의 유니코드 코드 포인트 XXXX는 16진수 코드 포인트이다.  
\xXX 라틴-1 문자라는데 뭔지 모름  

# 문자열에다가 변수안의 값 넣기
> let currentTemp = 19.5;
const message = `the current temperature is $currentTemp`\u00b0c   
--> 이렇게 한다 이말이야!  

# 심볼?
    심볼은 유일한 토큰을 나타내기 위해 ES6에 도입된 새 데이터 타입이다.  
    심볼은 항상 하나밖에 없다.
    어떤 값을 어떤 이름에 할당시킬 수 있게된다.
    const RED = Symbol("the color of sunset!");

# 객체
    const obj = {}
    obj.color = "yellow" --> obj에 color라는 이름의 키를 가진 값을 넣엇는데 그게 yellow임   
    obj["color"]; --> "yellow"  
    
    이게 아니라도 다르게도 가능
    const SIZE = Symbol();  
    obj[SIZE] = 8;
    obj[SIZE]; --> 8;

    또 다르게도 가능  
    obj = { color : 'yellow' , age : "17"}; --> 한줄로 선언

    객체에는 함수도 담을 수 있다.
    obj.speak=function(){return "meow!"};  
    이제 이렇게 한 후에는 obj.speak();로 함수 호출 가능  
    
    객체에서 프로퍼티 제거할때는 delete 연산자를 사용한다. 
    객체 안에는 배열도 넣을 수 있다. 

# 배열
    c언어,java와 동일하다.

# 날짜
    Date(); --> 현재의 날짜가 나온다  
> const now = new Date(); --> 현재의 날짜가 저장됨      

    특정한 날짜에 해당하는 객체를 만드는 법  
> const halloween = new Data(2) --> new를 안붙이면 문자열로   나옴 붙이면 객체로 나옴.    

날짜 객체를 만들고 난 후에는 각 부분을 가져 올 수 있다.  
halloween.getFullYear(); --> 연도  
halloween.getMonth() --> 달  
halloween.getDate() --> 날짜  
halloween.getDay() --> 1 (월요일임 일요일은 0)  
halloween.getHours(); --> 시간나옴  
halloween.getMinutes() --> 분 나옴  
halloween.getSecond() --> 초 나옴      

# 형변환
* string to number  
const numStr = "33.3";  
const num = Number(numStr); --> 변환 완료  
* 16진수 to 10진수
const a = parseInt("3a",10); --> 58

* int to string
const n = 33.3;
const s = n.toString();
