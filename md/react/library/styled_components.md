# styled-components

#### waring! 이 markdown file은 styled-components를 방금 막 접한 사람이 공부를 목적으로 만든 file입니다.

#### 만약에 보고 계신다면, 이 점 유의해 주세요.

## what is the styled-components?

---

만약에 당신이, front-end 개발자이고, css를 사용한다면, css를 배울때를 생각해 보자.  
간단하게 말해서 "극혐" 아니였는가? display,position,z-index... 우리를 괴롭히던 속성들이다.  
이런 혼돈을 잠재우려고 sass같은 것들이 개발 되었지만, 이것으로는 부족했다.  
그래서 javascript 기반의 css 툴을 제작하기 시작했다.

## how to install styled-components?

---

npm install --save styled-components

## how to use styled-components?

---

it's ez  
//styled-components인 부분

const Title = styled.h1`

font-size: 1.5em;  
 text-align: center;  
 color: palevioletred;

`;

const Wrapper = styled.section`

padding: 4em;  
 background: papayawhip;

`;  
이런식으로 작성할 경우에는 Title이라는 h1 component와 Wrapper라는 section component가 생긴다.

## use prop in styled-components

---

const Button = styled.button`

background: ${props => props.primary ? "palevioletred" : "white"};  
  color: ${props => props.primary ? "white" : "palevioletred"};  
 font-size: 1em;  
 margin: 1em;  
 padding: 0.25em 1em;  
 border: 2px solid palevioletred;  
 border-radius: 3px;

`;
이 코드는 Button components에 props를 줄 경우에 props.primary 가 있을 경우에, background color를 palevioletred 로 바꾸고 아니면 white로 지정한다.

## overlay style

const Button = styled.button`

color: palevioletred;  
 font-size: 1em;  
 margin: 1em;  
 padding: 0.25em 1em;  
 border: 2px solid palevioletred;  
 border-radius: 3px;  
`;

const TomatoButton = styled(Button)`

color: tomato;  
 border-color: tomato;  
`;  
이 코드는 짜 놓았던, Button component에다가 color와 border-color를 바꾸어서 TomatoButton을 정의하였는데, 원래 button component를 styled 해야 하지만 요번에는 그냥 위에서 정의 해놓은 Button component를 재정의 했다. style을 덮어씌웠다고 할 수 있다.
