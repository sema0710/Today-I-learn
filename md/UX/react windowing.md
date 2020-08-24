# React Windowing

## 서론

이 글은 프론트엔드 개발을 한 지, 1년쯤 된 예비 개발자가 쓴 글입니다.
오류가 많을 수 있고, 오타가 있을 수 있습니다. 발견하시면 댓글로 알려주시면 감사하겠습니다.

## 서버에서 pagenation을 안해줘요 😢
windowing에 대해서 알게 된 것은, React 최적화를 찾아보던 도중에 처음보는 단어가 있어서 
들어간 것이였다. 구글에 검색해 보았다.
> 많은 데이터를 list로 만들게 되면 초기 렌더링이 너무 오래 걸린다. 사용자 입장에서 매우 불편하다. 이것을 해결하기 위해서 list중에 사용자에게 보이는 부분만 rendering 시키는 기법

이 글을 읽자마자, 생각난건 내가 옛날에 진행했던 프로젝트에서 겪었던 문제다.
예전에 streamer-storage라는 프로젝트를 진행하면서 서버에서 100개가 넘는 데이터를 받아서 list로 띄워줘야 하는 상황이 나오게 되었다. firebase를 사용하는 상황에서 pagenation이고 뭐고 어떻게 사용하는지 몰랐던 나는 그냥 100개를 한꺼번에 띄워주는 방식을 사용했는데, 지금도 pagenation을 어떻게 사용하는지 모르니 windowing을 사용해보자.

## 라이브러리가 있네? 😙
찾아보니, windowing을 구현하는 것은 조금 힘들다는 것을 깨달았다.
그래서 라이브러리를 찾아봤는데, react-window라는 라이브러리가 대중적으로 쓰인다는 것을 
알아냈고, 이 라이브러리에 대해서 찾아보았다.
[react-window github link](https://github.com/bvaughn/react-window)
대충 사용법을 알아보자. ~~(react-window 예시코드를 변형하겠다.)~~
``` jsx
import React from "react";
import ReactDOM from "react-dom";
import { FixedSizeList as List } from "react-window";

const Example = () => {
  const dataList = ["hello", "world"];
  return (
    <List
      className="List"
      // class 이름
      height={75}
      // 아이템이 보이는 곳의 크기
      itemCount={1000}
      // 아이템 개수
      itemSize={75}
      // 아이템 높이
      width={300}
      // 아이템 보이는 곳의 넓이
      itemData={dataList}
      // 아이템 데이터 (배열로 줘서 component에서 indexing 해주자)
    >
      {Column}
    </List>
  );
};

const Column = (props) => {
  // props의 구조는 { data, style, index, isScrolling }으로 되어있다.
  return (
    <div
      className={props.index % 2 ? "ListItemOdd" : "ListItemEven"}
      style={props.style}
    >
      Column {props.data[props.index % 2]}
      // indexing 해주는 부분![](https://images.velog.io/images/pandati0710/post/8c0ea0db-7020-492d-a50d-c4644020eee5/react-windowing.gif)
    </div>
  );
};

ReactDOM.render(<Example />, document.getElementById("root"));
```
이 예제는 밑과 같이 나오게 된다.
![예시](https://images.velog.io/images/pandati0710/post/cb0f167b-7863-486a-951b-b878fb68605b/react-windowing.gif)

스크롤이 되면서 그 부분에 있는 component들이 렌더링 되는 것을 알 수 있다.

### 부록 - react windowing + lazy loading
공식 깃허브에 이런 예제 링크가 있어서 공유한다
https://codesandbox.io/s/5wqo7z2np4
lazy loading 과 windowing을 접목한 예제인데, 실제로 가장 많이 쓰일 것 같다.

### 위에서 사용된 예제코드 링크
https://codesandbox.io/s/relaxed-wood-hk0x2?file=/index.js

## 결론
다량의 데이터로 list를 만들경우 react-window라는 라이브러리로 windowing을 하면 사용자 경험을 증진시키는 데 좋은 영향을 준다.

### 출처
https://ko.reactjs.org/docs/optimizing-performance.html
https://github.com/bvaughn/react-window