# Dependency

## dependency(의존성)이란?

SOLID중 마지막 D이다.	 

dependency는 아래의 코드로 설명 할 수 있다.

```js
class A {
    let num = 10;
}
class B {
    let sth = A();
}
console.log(B.sth.num);
```

이렇게 되면, B는 A가 없어질 경우에 에러가 발생하게 되는데, 

이런 경우를 B와 A의 의존관계가 생기게 됩니다.

## dependency injection(DI)

의존성 주입이라고 읽는다.

의존성 주입은, 의존성을 설명할 때 사용했던 코드를 예로 설명하겠다.

```js
class A {
	let num = 10;
}
class B {
	constructor(A){
		this.sth = A;
	}
}
console.log(B.sth.num);
```

이렇게 보면, 말 그대로 의존성을 띄는 class를 매개변수로 주입 해주는 것을 의미합니다.

이렇게 되면 A가 아닌 다른 class가 들어가도 되므로, 의존성이 떨어지게 됩니다.

이렇게 하게 되면 좋은점은, 일단 의존성이 줄어들고, 코드 읽기가 좋아집니다.

## Dependency Inversion Principle

의존성 역전 이라고 부른다.

그럼 의존성 역전이란 무엇일까?

위의 코드를 보면 어떻게 하던지 A가 B에 들어가는 형태로 구성이 되어 있다.

저것이 의존성이 아에 없다고는 불가능하다고 생각한다.

따라서, A와 B의 의존성을 아에 없애버리는 것을 의미합니다.

interface를 사용하면 됩니다.

```typescript
interface DependencyClass {
    num: number
}

interface classB {
    sth: number
}

class a implements DependencyClass {
    num = 10;
}

class b implements classB {
    sth: number;
    constructor(classes: DependencyClass){
        this.sth = classes.num;
    }
}

const A = new a();
const B = new b(A);
```



