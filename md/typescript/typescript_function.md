# typescript function

## 함수의 타입

ts에서 함수의 타입을 지정하는 방법은 생각보다 간단하다.

우선 두가지를 지정할 수 있다. 매개변수의 타입과 반환값의 타입을 정할 수 있다.

```typescript
function(param:number,state:string):object {
   ...sth
}
```

## 함수값의 타입

함수값의 타입은 es6의 화살표 함수와 비슷하게 정의 할 수 있다.

```typescript
(...매개변수) => return값
```

예시를 보자면,

```typescript
const addFunc: (a:number, b:number) => number = (a,b) => return a+b;
```

이렇게 사용 할 수 있다.

## default 매개변수

매개변수가 들어오지 않으면, 기본으로 사용될 매개변수를 지정 할 수 있다.

```typescript
(매개변수명:타입 = default value) => {...sth}
```

## 선택 매개변수

매개변수가 들어오지 않아도 에러가 나지 않도록 할 수 있다.

```typescript
(매개변수명?: 타입) => {...sth}
```



## this

함수에서 this를 사용하기 위해서는 매개변수에 this를 지정해주어야 한다.

매개변수에 this를 지정한다고, 실행 시 this를 넣어줘야 한다거나 그렇지는 않는다.

```typescript
(this:sth)=> {...sth}
```



