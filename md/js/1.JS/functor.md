# Fuctor 

## 서론

> 이 글은 함수형 프로그래밍을 거의 처음 접한 1년차 javascript 예비 개발자가 쓴 글입니다.
>
> 틀린점, 이상한 점, 보충할 점, ~~때릴점~~ 과 같은것들은 댓글이나 메일로 보내주세요~

## functor?

오늘의 주제 functor, 필자는 이 단어를 아는 분 블로그를 뒤지다가 발견하게 되었다.

Functor? 도대체 이게 뭐야? 그래서 찾아보게 되었다.

우선 내가 가장 와닿았던 글을 인용해 보겠다. 

> Functor란? 박싱된 값에서 값을 뺀 후, 값에 특정 함수를 적용해 타입 과 값을 변경하고, 다시 값을 박싱하는 것이다.
>
> map 함수를 사용할 수 있는 container
>
> 단항 함수로 매핑할 수 있는 container

* 매핑 : 모든 데이터에 단항함수를 모두 적용하고, 그 값을 다른 컨테이너로 반환하게 할 수 있음을 의미

## why functor?

그래서 functor를 어디다가 쓰는가..?

우선 functional programming에서 컨테이너의 값은 바꿀 수 없게 해야한다.

예시로 javascript의 배열을 예시로 들어보자. 배열은 가장 흔히 쓰이는 container이다.

그런데 container의 값은 바뀌면 안되지만, 값이 바뀔 수 있는 메소드들이 즐비하고 있다.

예를 들면 push만 봐도, container 안의 값이 바뀌는 메소드 이다. 그래서 사람들은

```javascript
const testArray = [1,2,3];
testArray.push(5); // X
const anotherArray = [...testArray, 5]; // O
```

와 같이 push를 대체하기도 한다. 

이런 배열은 functor를 사용할 수 있는데, 위에서 끌어온 글 3개 중 마지막 글을 다시 보자

컨테이너의 모든 데이터에 단항함수를 적용하고 그 값을 다른 컨테이너로 반환하게 할 수 있는 컨테이너.

저런 일을 하는 메소드를 가진 컨테이너는 여러개가 있지만 대표적으로 배열이 있고 그 안에 map 함수가 있다.

map는 컨테이너 내부 값을 변경하지 않으면서  단항함수를 내부 값에 접근 할 수 있게 해주기 때문에 사용한다.

내 생각에 이게 functor를 사용하는 이유다.



## 정보 출처, 인용한 글 출처

https://boxfoxs.tistory.com/434

https://ui.toast.com/weekly-pick/ko_20151117/

[https://medium.com/@lazysoul/functor-%ED%8E%91%ED%84%B0-7d5819a87b91](https://medium.com/@lazysoul/functor-펑터-7d5819a87b91)









