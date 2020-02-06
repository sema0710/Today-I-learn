# CORS

## Cross Origin Resource Sharing

CORS는 cross site http request를 날리게 할 수 있게 하는 표준 규약이다.

javascript의 서버통신에서는, 프로토콜, 호스트, 포트가 같아야지만 통신이 가능하다.

그러지 않으면 same origin policy에 걸려서 통신이 불가능 해진다.

그래서 이때 외부도메인과 통신하기 위해서 만들어진 통신 규약이 cors이다.

요청이나 응답을 어떻게 할지 정한 통신 규약이다.

이때 하나의 method가 추가되는데 OPTIONS method가 추가되었다.

OPTIONS는 모든 통신이 request 되기 이전에 서버로 한번 가는 통신으로,

서버로 보낸 요청을 허용 할지 안할지를 정하는 것이다.

![img](https://juicyjusung.github.io/2019/08/21/http/cors/Untitled-d17bd2fb-76e7-42c1-84cc-35e6bc22a682.png)

실제로 통신이 일어나는 모습을 그림으로 표현하였다.

출처: https://juicyjusung.github.io/2019/08/21/http/cors/#Prefilight-Request

