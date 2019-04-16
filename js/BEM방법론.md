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
modifier은 --로 구분한다.  
형식은 이렇다.  
.block__element--modifier{...}

---

## 기대효과
일단 class의 명이 매우 짧아진다.  
한눈에 보기 매우 편해진다.

---
