# 제네릭

제네릭은 함수나 변수를 작성할 때, 타입을 정하는 것이 아닌 실행할 때, 타입을 정할 수 있게 해준다.

그래서, 이 제네릭을 사용하려면 함수나 변수를 실행하는 곳에서 타입을 담아놓을 변수가 필요하다.

그것을 타입변수라고 부른다.

## 타입변수

타입변수는 <type변수>로 정의한다.

```typescript
type sthArray<T> = T[];
```

이렇게 사용할 수 있다. 만약에 사용하게 된다면,

```typescript
type numberArray: sthArray = sthArray<number>
```

## 제네릭 함수

타입변수를 이용해서, 제네릭 함수를 정의 할 수 있다

```typescript
function func<T>(arr: T[]):T {
	...sth
}
```

이제 이 함수를 호출할 때, func<sth>이렇게 해주어야 한다.