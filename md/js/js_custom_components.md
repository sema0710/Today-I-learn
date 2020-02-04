# custom component

공부 출처 : [https://kyu.io/%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B81-keep-calm-and-usetheplatform/](https://kyu.io/웹-컴포넌트1-keep-calm-and-usetheplatform/)

## custom component

우리는 js 라이브러리가 넘치는 세상에서 살아가고 있다.

개발이 쉬워지고, 다양한 장점이 있지만, 그에 따른 단점도 많다.

우선, 파일의 용량이 커지고 라이브러리에 의존적인 코드를 짤 수 밖에 없다.

그래서 나온지는 오래되었지만, 사용은 잘 한적 없는 html, js의 기본 내장 <strong>custom component</strong> 를 써보겠다.



```html
<!DOCTYPE html>
<html>
    <head>
        <script src="jsfile 경로"></script>
    </head>
    <body>
        <hello-world>hello world!</hello-world>
    </body>
</html>
```

```js
class helloworld extends HTMLElement {
    constructor() {
        super();
    }
    static get observedAttributes() {
        // 모니터링 할 속성 이름
    }
    connectedCallback() {
        // DOM에 추가되면 실행되는 method;
        this.innerText = "hi!";
        this.set();
    }
    disconnectedCallback() {
        // DOM에서 제거면 실행되는 method
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        // 속성이 추가/제거/변경되면 실행되는 method
    }
    adoptedCallback(oldDoc, newDoc) {
        // 다른 Document에서 옮겨지면 실행되는 method
    }
    set() {
		setTimeout(()=> {
			this.innerText = "my name is sema";
        },1000)
    }
}
customElements.define('hello-world', helloworld);
```

이렇게 html과 js를 실행시키게 되면, hi! 에서 1초 후에 my name is sema로 text가 바뀌는 것을 볼 수 있다.



## shadow dom

그런데, 이렇게 custom component로 캡슐화를 할 수 있게 되었는데, 이 component를 디자인 하게 되면,

어떻게 해야할까? webpack 등장 이전에 모듈화를 보는 것처럼 class와 id가 겹치는 기이한 현상을 볼 수 있다.

그래서 사용되는 것이 shadow-dom이다. 이것은 html을 scope로 나누는 듯한 느낌을 준다.

```js
document.body.appendChild(document.createElement('div')).attachShadow({mode: 'open'})
```

document.body에 div를 만들어서 넣는데, 그 div를 attachShadow({mode: 'open'});

라는 코드를 붙이는 것을 볼 수 있다. 이게 shadow-dom을 만드는 방법이다.

![Image result for shadow dom"](https://miro.medium.com/max/1424/1*vb3-5n48rHq55qQzAN67qA.png)

shadow dom을 가장 잘 표현한 모습이라 생각되어 가져와 보았다.

shadow host라는 부분에서 shadow tree를 생성해서 밑에 요소들을 달고 있는 것을 확인 할 수 있다.

shadow host는 attachShadow를 이용해서 만들고, shadow tree는 host 안에 넣는 elements들을 의미한다.

style을 지정하는 방법은, shadow host 안에 style tag를 innerHTML으로 넣어주는 방법이 있다.



위의 사이트에서 따온 예제이다.

```js
class MyElement extends HTMLElement {
    static get observedAttributes() {return ['lang']; }
    constructor() {
      super();
      // add shadow root in constructor
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `
        <style>div { background-color: #82b74b; }</style>
        <div>yey</div>
      `;
      this._yey = shadowRoot.querySelector('div');
    }
    attributeChangedCallback(attr, oldValue, newValue) {
      if (attr == 'lang') {
        let yey;
        switch (newValue) {
          case 'ko':
            yey = '만세!';
          break;
          case 'es':
            yey = 'hooray!';
          break;
          case 'jp';
            yey = '万歳!';
          break;
          default:
            yey = 'yey!';
        }
        this._yey.innerText = yey;
      }
    }
    yell() {
      alert(this._yey.innerText);
    }
  }
  window.customElements.define('my-element', MyElement);
```



## templete

위의 shadow-dom을 보면, 문제점이 있다.

모든 elements들을 코드로 구현해야 한다.

위를 보면 문자열로 tag들을 구현한 것이 보이는가?  저렇게 코딩하면, 힘들 뿐만 아니라, 가독성도 별로다.

그래서 html에 있는 template tag를 사용하면 된다.

```html
<template id="testtemp">
	<div>
        <div>
            hello
        </div>
    </div>
</template>
```

```js
const template = document.querySelector('#testtemp');
const copy = document.importNode(template.content, true);
```

템플릿을 만들고 그 템플릿을 끌어와서 복사까지 하는 코드이다.

copy에는 html이 담겨 있기 때문에, 그대로 appendChild 하면 된다.



