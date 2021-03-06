# HTTP

## HTTP란?

제 생각에는 HTTP를 처음 보는 사람들이 많을꺼 라고 생각합니다. 

따라서 너무 깊게 들어가지는 않고 적당한 선을 지키면서 설명하도록 하겠습니다.

그래서 HTTP가 무엇일까요?

우리가 크롬이나 인터넷 익스플로어 같은 "브라우저"에서 여러가지 url들을 입력해서 이동하게 됩니다.

그 때, 관찰력이 좋은 분은 그 주소 뒤에 HTTP나 HTTPS라는 것이 있는 것을 확인 한 적이 있을겁니다.

일단 HTTP는 "Hyper Text Transfer Protocol"라고 합니다. 그대로 해석해 보면,  

<del>"신난 글자 변환 프로토콜"</del>  "글자 전환 프로토콜"입니다. 

프로토콜은 그냥 데이터 통신을 위한 규약이라고 이해하면 됩니다.

결론적으로는 <strong>인터넷에서 데이터를 주고받는 통신 규약</strong>이라고 이해하면 될 것 같습니다.

## TCP / UDP

HTTP에서 사용하는 통신 방법은 TCP와 UDP가 있습니다.
이 두개를 명료하게 설명해 주는 사진이 있습니다. 

![TCP와 UDP의 차이 그림으로 보기 : 클리앙](https://cdn.clien.net/web/api/file/F01/7948515/b76ff17b66c34.jpg)



 ### TCP

사진을 보면 알겠지만 TCP의 큰 특징은 직접 연결해서 통신을 진행한다는 것입니다.

직접 연결되어 있으면, 통신이 안정적이고 흐름제어 및 혼잡제어를 할 수 있습니다.

직접 연결하게 되므로, 1:1 연결을 전재로 깔고 갑니다.

### UDP

사진에 나오다 시피 UDP는 비연결 통신을 진행한다는 것입니다.

보내는 쪽에서는 받는 쪽이 데이터를 받았는지 받지 않았는지 확인할 수 없고, 또 확인할 필요도 없도록 만들어진 프로토콜이라고 이해하면 편합니다.

하지만, 비연결 통신인 만큼, 신뢰도가 떨어지고 흐름 제어 및 혼잡 제어가 힘들어집니다.

## HTTP 응답 코드

어쨋던지 HTTP는 인터넷 통신 규약이라고 말씀을 드렸습니다.

앞쪽의 강의에서 웹과 서버에 관련하여 배웠을 것입니다.  여기서 서로 통신할 때, HTTP를 사용합니다.

이 때, 서버와 통신이 잘 되었는지 아니면 문제가 생겼다는 것을 알기 위해서 상황에 따라서 코드를 지정해 놓았습니다.

그것을 <strong>HTTP 응답 코드</strong> 라고 합니다.

응답 코드는 밑의 주소에 자세하게 나와있다. 밑의 글에는 자주 쓰이는 코드를 정리하겠습니다.

코드 : [https://ko.wikipedia.org/wiki/HTTP#%EC%9D%91%EB%8B%B5_%EB%A9%94%EC%8B%9C%EC%A7%80](https://ko.wikipedia.org/wiki/HTTP#응답_메시지)

| 2XX  | Success(성공) | 데이터 전송이 성공적으로 이루어졌거나, 이해되었거나, 수락되었음. |
| ---- | ------------- | ------------------------------------------------------------ |
| 200  | OK            | 오류 없이 전송 성공. <del>기분이 가장 좋아지는 코드</del>    |
| 204  | Non Content   | 클라이언트의 요구를 처리했으나 전송할 데이터가 없음.         |

| 4XX  | Client Error(클라이언트 오류) | 클라이언트 측의 오류. 주소를 잘못 입력하였거나 요청이 잘못 되었음. |
| ---- | ----------------------------- | ------------------------------------------------------------ |
| 404  | Not Found                     | 문서를 찾을 수 없음. 서버가 요청한 파일이나 스크립트를 찾지 못함. |
| 400  | Bad Request                   | 요청 실패. 문법상 오류가 있어서 서버가 요청사항을 이해하지 못함,<del>세상 화나는 코드</del> |
| 405  | Method not allowed            | 메서드 허용 안됨. 요청 내용에 명시된 메서드를 수행하기 위해 해당 자원의 이용이 허용되지 않음. |

| 5XX  | Server Error(서버 오류) | 서버 측의 오류로 올바른 요청을 처리할 수 없음. |
| ---- | ----------------------- | ---------------------------------------------- |
| 500  | Internal Server Error   | 서버 내부 오류.                                |
| 501  | Not Implemented         | 필요한 기능이 서버에 설치되지 않았음.          |
| 502  | Bad gateway             | 게이트웨이 상태 나쁨.                          |



## HTTP 메소드

이제 서버와 웹에서 통신이 잘 되는지 안되는지를 알 수 있게 되었습니다.

그런데 서버에서 프론트엔드의 요청이 무엇을 원하는지, 어떤 행동을 해서 어떤 정보를 넘겨주어야 하는지 알아야 합니다.

그걸 웹에서 요청을 보낼 때 <strong>메소드</strong>를 이용해서 서버에게 귀띔을 해줄 수 있습니다.

밑의 표에서 자주 쓰는 메소드들을 정리해 놓겠습니다.

| 이름    | 역할 및 의미                                                 |
| ------- | ------------------------------------------------------------ |
| GET     | 요청한 URL의 정보를 검색하여 응답한다                        |
| POST    | 요청된 자원을 생성한다.                                      |
| HEAD    | GET과 비슷하지만 HEAD 부분만 존재한다.                       |
| OPTIONS | 서버에서 지원하는 HTTP 메소드를 알아내기 위해서 요청하는 메소드다. |
| PUT     | 요청한 정보를 업데이트 한다.                                 |
| DELETE  | 요청한 정보를 삭제한다.                                      |



## HTTP 요청

위에서 메소드와 상태 코드에 대해서 알아 보았으니, 이제 요청을 어떻게 보내는지에 대해 알아봅시다.

우선 HTTP 요청은 3 파트로 나눌 수 있습니다.

요청 라인, 헤더, 바디

간단하게 생각하면 3가지로 구성되어 있습니다. 요청을 사진으로 보여드리도록 하겠습니다.

### 상태 라인

우선 요청 라인에서 표현 되는 정보는, 위에서 했던 메소드와 URL 주 그리고 HTTP 버전이 담겨 있습니다.
응답에서는 HTTP 버전, 상태코드, 응답 이유가 담겨 있습니다.

### 헤더

자료의 타입이나 통신에 대한 정보를 가지고 있는 파트입니다.

그리고 바디가 시작되기 전에 헤더와 바디 사이에 공백이 반드시 존재합니다.

### 바디

요청에 필요한 데이터가 담겨있는 부분입니다.

이런 3 부분이 모여서 HTTP 요청을 이룹니다.



## HTTPS?

그럼 이제 HTTP에 대해서는 대충 이해가 가는데 그럼 뒤에 S는 무엇인가?

HTTPS는 HyperText Transfer Protocol over Secure Socket Layer 라고 할 수 있습니다.

그럼 HTTP는 맞는데 조금 더 안전하게 사용이 가능한 HTTP라고 할 수 있습니다.



## 마치며...

초반에 HTTP 보면 이해가 안가는게 정상입니다. 네 인정합니다. <del>저도 그랬어요</del>

하지만 프론트나 백엔드에서 반드시 알고 있어야 하는 개념입니다. 어렵더라도 자료를 찾아보면서 이해하는 것을 추천합니다.

맨 처음에 선을 넘지 않겠다고 했던 것 같은데 쓰다보니 조금 어려운 개념을 넣은 것 같습니다. 죄송합니다.

글을 작성하면서 제가 잘 모르는 부분을 다시 채울 수 있는 좋은 기회였다고 생각합니다.

