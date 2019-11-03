# Proxy

### Proxy 객체는 기본적인 동작(속성 접근, 할당, 순회, 열거, 함수 호출 등)의 새로운 행동을 정의할 때 사용합니다.(FROM WEB DOCS)
출처 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy

## 그래서 proxy가 뭐야?
proxy는..간단하게 말하자면, 객체에 어떤 행동을 지시하면, 그에 따른 함수를 실행시켜주는 문법을 말한다.  
여기서 의문점이 들 것이다. 왜 굳이 proxy를 사용하지? 그냥 넣기 전에 if문 넣어주면 되는 거 아니야?  
그래도 되긴 하지만, 코드가 매우 더러워 질 것이다.  
만약에, 객체에 값을 넣을 때마다, setData 라는 함수를 실행시켜서 값을 검증한다면?  
그만큼 비효율 적인 코드도 또 없을 것이다.  
그래서 proxy라는 것을 만들어서, handler라는 객체 규칙에 set을 등록하면,  
값을 넣을 때 마다 그 함수를 실행 시킨다.  

# proxy는 어떻게 쓰는데?  
정말 ez하다.  
let Proxy1 = new Proxy(target , handler);  
이런식으로 proxy를 구현하면 된다.  
target에는, 객체가 들어간다.  handler에는 이 객체의 규칙을 지정하는 객체가 들어간다.(ㅎㅎ)  

# 예시..예시를 보자

```
var handler = {
    get: function(target, name){
        return name in target?
            target[name] :
            37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37
```
이 코드는 만약에 객체에 없는 key를 찾으면, 37을 return 하는 코드이다.  
값을 찾을 때, 실행되는 규칙은 get이라는 규칙을 handler에 넣으면 된다.  
다른 예제를 보여주겠다.  

```
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('나이가 숫자가 아니에요');
      }
      if (value > 200) {
        throw new RangeError('나이가 비현실적이에요');
      }
    }

    // The default behavior to store the value 
    obj[prop] = value;
  }
};

let person = new Proxy({}, validator);

person.age = 100;
//잘 들어간다.
peson.age = "hello";
//error 숫자가 아닌 값이 들어감
```
이런식으로, 객체에 값이 들어갈 때, 규칙을 정하는 set이 있다.

# 다른 규칙들
이 외에도 여러가지 규칙이 있지만, 너무 많아서 여기서 모두 다루지는 않겠다.    
궁금하다면, mdn을 찾아보길 바란다.  
mdn link : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy  
