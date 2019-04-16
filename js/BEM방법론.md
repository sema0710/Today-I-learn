## BEM방법론
---
class명을 정하는 규칙이다.
block element modifier의 줄임말이다.
id에는 사용하면 안된다. 무조건 class에만!

---

## block
---
안에 요소를 담고 있는 컨테이너  
예를 들면...  
body,header,nav,article,footer등이 있다.  

## element
---
element는 block안에 담긴 요소를 의미한다.
.body__logo{color: white;}  
--> body 안에 있는 logo를 의미  
.header__tagline { background : black;}

---

##  modifier
modifier은 element의 속성을 의미한다.    
element의 속성이라는 것은..? 무엇일까   
element의 속성은 element가 있다. 그 element가 가지고 있는 특징이나 모양, 색깔 , 역할 등을 의미한다.  
그러니까, body태그 안에 있는 content에서 제목을 담당하는 것은 어떤 class를 가지게 해야하는지 보자.  
body__content--title 이런 class이름을 가져야 할 것이다.
modifier은 --로 구분한다.  
형식은 이렇다.  
.block__element--modifier{...}

---

## 기대효과
일단 class명 가독성이 매우 좋아집니다.
한눈에 보기 매우 편해진다.

---
 
