# Single Responsibility Principle

## 단일 책임 원칙

---

객체지향의 SOLID 중에 S를 담당하는 단일 책임 원칙에 대해서 알아보자.

```javascript
class human {
	move(){...}
    attract(){...}
    shake(){...}
    draw(){...}
    see(){...}
    ...
}
```

이렇게 생긴 human 라는 class가 있다.

이 class는 움직여라, 끌어라, 흔들어라 등등 여러가지 역할을 수행하는 class이다.

이렇게 여러가지 역할을 가지고 있으면 단점은 무엇인가?

우선 human 에 문제가 있을 경우 move, attract, shake등 이 method들에게 모두 수정한 것을 

적용시켜주어야 한다. 버그잡기가 힘들어지고, 테스트를 할 경우에 테스트 단위를 쪼개기 힘들어진다.

그럼 우리가 해주어야 하는 것은 무엇인가? 바로 class 하나 당 1개의 역할만 부여해 주는 것이다.

## 적용방법

---

저렇게 여러가지 역할을 가지고 있을 때, SRP를 적용하는 방법은 무엇일까?

단순히 저 역할들을 class로 나누어주면 된다.

사람의 몸을 나누어서, 부위가 하는 역할을 나누어 주면 되는 것 아닐까?

```javascript
class lag {
	move(){};
}
class hand {
	attract(){...};
	shake(){...};
	draw(){...};
}
class eye {
	see(){...};
}
```

이렇게 하다 보면, 실수나 고의로 너무 잘게 쪼개질 때가 있다.

추상화가 제대로 이루어지지 못한 경우이다.

```javascript
class firstFinger {
	moveFirstFinger(){...}
}
//...등등
```

이럴 경우에 사용하는 기법은 산탄총 수술이라는 기법이다.

산탄총 총상을 치료하듯이, 여기저기 퍼진 총탄을 빼낸다고 생각하면 된다.

비슷한 총탄끼리 모아서 하나의 class로 만들어 내면 된다.