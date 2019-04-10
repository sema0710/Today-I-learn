# http의 정의

http는 hypertext tranfer protocol로 www상에서 정보를 주고받는 프로토콜이다.  
http는 웹브라우저와 서버 간의 웹페이지같은 자원을 주고받을 때 쓰는 통신 규약이다.  
http는 text 교환이다.  
http는 단순 text이므로 보안에 취약하다.  

***

# https의 정의  

https는 ssl프로토콜을 이용하여 웹브라우저와 서버가 데이터를 주고 받는 통신 규약이다.  
https는 http를 암호화 한다.  
http**s**는 secure socket을 의미한다. 

***  

# https를 사용하는 이유    

    개인정보 보호    
    무결성  
    신원확인  

## 개인정보 보호   

    http는 기본적으로 text이다.    
    일반적인 text이므로 보안에 취약하다.    
    https는 http를 암호화 하여 보안을 강화한다.
## 무결성
    text가 중간에 바뀌지 않는다는 것을 알려준다.
## 신분확인
    누가 신호,정보를 보냈는지 사이트가 알 수 있게 한다.

# https가 text를 암호화 하는 방법

    1.https는 공개키를 이용하여 파일을 암호화,복호화 한다.  
    2.파일을 받을 사람이 자신의 공개키를 공개키 저장소에 올린다.  
    3.파일을 보낼 사람이 받을 사람의 공개키를 받아서 평문을 암호문으로 바꾼다.  
    4.암호문을 파일 받을 사람에게 보낸다.   
    5.파일을 받은 사람은 암호문을 복호화 할 수 있는 자신의 개인키로 암호문을 복호화 한다.
    6.평문을 받는다!  
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F9943623359FF02B1056ED8">


