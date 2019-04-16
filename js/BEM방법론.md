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
element는 block안에 담긴 자식?을 의미한다.
.body__logo{color: white;}  
--> body 안에 있는 logo를 의미  
.header__tagline { background : black;}

---

##  modifier
modifier은 element의 특성이나 형태를 의미한다.      
modifier은 --로 구분한다.    
body안에 content있고 title과 text 2개가 있는데 text한개는 빨강색이여야 한다고 하자  
그렇다면, body__content__text로 모든 text의 class를 정하고 빨강색이여야 하는 것은    body__content__text--red를 클래스 뒤에 추가하면  
css를 넣을때, body__content__text를 넣으면 두개 다 먹고 body__content__text--red로 css를   먹이면 빨강색이여야 하는 것만 먹는다  
ex)
> <body>  
<content>  
    <title></title>  
    <text class="body__content__text"></text>
    <text class="bddy__content__text--red"></text> <!--여기가 빨강색이어야 하는 text-->
</content>
</body>

text는 body__contents--text라고 해야한다.

형식은 이렇다.  
.block__element--modifier{...}

---

## 기대효과
일단 class명 가독성이 매우 좋아집니다.
한눈에 보기 매우 편해진다.

---
 
