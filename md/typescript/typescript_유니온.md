# 유니온 타입

## 유니온 타입이란?

프로그래밍을 하다보면, 항상 일어나는 일이 있다.

같은 값이 들어가도, 다른 자료형이 나오는 함수가 항상 있기는 마련이다.

하지만, typescript는 any라는 값이 있기는 하지만, 만약 이 자료형을 정하고 싶다면 어떻게 할까?

그 때, 유니온 타입을 사용하면 된다.

## 유니온 타입 사용법

그냥 number와 string이 나올 수 있는 type이면,

```typescript
type sth = number | string
```

이런 형식으로 사용할 수 있다.

이 유니온 타입은, custom으로 만든 type도 사용할 수 있다.

```typescript
type animal = string
type live = sth | object
```

