# react memo

### react 성능 최적화

우리가 react로 개발을 하다 보면 뭔가 이상한 것을 느낄 수 있을 것이다.

로딩 속도가 장난 아니라는 것을. 물론 개발 모드에서 error가 뜨는 것을 제외하면

속도가 빨라지긴 하지만, 그래도 일반 정적 웹보다는 느리다.

그러면, props와 state를 변경할 때 일어나는 render 양을 줄이는 것이 최적화에서 가장 중요하다.

그 중 하나인, <strong>memo</strong>에 대해서 알아보도록 하자.

### so what is memo

그래서 memo가 뭐냐구요?

![image-20200110141610293](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200110141610293.png)

이렇게 SNS 의 기능을 가진 SPA가 있습니다.

여기엔, 글이 올라오고, 쓸 수 있는 기능이 있습니다.

만약에 글들을 state로 관리한다고 가정하면, 글을 한번 쓸 때 마다, 모든 글들이 render 되지 않을까요?

그렇게 되면, 성능이 대폭 저하되지 않을까요?

옛날에 렌더 시킨 글들은 내용이 같으니까, 굳이 재렌더 해야 할까요?



### rerender 안하기

그러면 어떻게 해야 할까요?

이럴 때, react memo를 사용하면 됩니다.

export 할 때 그냥 react.memo({compoenent})로 해버리면 됩니다.

만약 component 이름이 post이면, React.memo(post)하게 되면, 

react 의 props가 변경되지 않으면, render하지 않는다는 것입니다.

이렇게 되면, 예전에 있던 글들은 render되지 않으니 속도가 훨씬 빨라지게 되요.