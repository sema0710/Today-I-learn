# xss 공격

서버로 javascript file을 보내서 다른 사용자들에게 자신이 만든 스크립트를 실행시켜

정보를 빼내는 해킹 기법 중 하나이다.

이런 xss 공격에는 2가지 형태가 있다

## Reflected Xss

xss 공격을 위한 URL을 공격 하려는 사람에게 노출시켜서 유도하는 방법이다.

<img src="https://t1.daumcdn.net/cfile/tistory/2272044B58C4E00504"/>

## Stored Xss

게시글에 스크립트가 삽입된 게시글을 올려서 공격 하려는 사람이 누르면 

스크립트가 실행되는 공격 방법이다.

<img src="https://t1.daumcdn.net/cfile/tistory/22662A4B58C4E00705"/>

