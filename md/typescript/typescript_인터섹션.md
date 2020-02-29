# 인터섹션 타입

두개 이상의 type을 모두 만족해야 하는 type을 만들고 싶다?

답은 인터섹션 타입이다.

## 사용법

&를 활용하면 된다

```typescript
type sth1 = {
	s: number
}
type sth2 = {
	t: string
}
type sth = sth1 & sth2
```

```typescript
type sth = string & number // error
```

이렇게 모순적인 선언은 할 수 없다.