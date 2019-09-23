# what is the Map Object in js?

Map 오브젝트는, js의 object의 단점을 보완한 key와 value값을 연결하는 데이터 구조이다.  
object의 문제점.

1. 프로토타입 체인으로 인해서 의도하지 않은 연결이 생길 수 있다.
2. 객체 안에 연결된 키와 값이 몇 개나 되는지 쉽게 알아낼 수 있는 방법이 없다.
3. 키는 반드시 문자열 or Symbol
4. 객체는 propurty 순서를 보장하지 않음


```

const userRoles = new Map();

userRoles.set("key","value");
userRoles.has("key"); // key in Map ? true : false;
userRoles.get("key"); // get value about the key;

uesrRoles.size // 1(size of the userRoles);


userRoles.delete("key"); // delete value of the key;

user.clear();// clear the Map obj;

```

# what is the WeekMap

weakmap == map  
weakmap !== map  

map과의 다른점은 3가지가 있다.

key = only object;
weakMap.key === garbage collection // true
WeakMap is not 이터러블
 


