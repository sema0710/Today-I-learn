display

display 요소를 어떻게 보여줄 지 결정함

none:아에 보이지 않게함

block:가로길이가 기본적으로 100%이고 block인 태그를 이어서 사용하면 줄바꿈이 된다.div태그가 block 이다

inline:block과 다르게 줄바꿈은 되지 않는다.

다른 tag옆에 붙는다.span태그가 inline이다

width와 heigth 속성을 사용 할 수 없다.

inline-block

inline 같이 줄바꿈은 되지 않지만

width와 heigth 속성을 사용 할 수 있다.

p 태그가 inline-block 이다.

flex

흠....flex는 여러가지 기능이 있다.

display:flex;를 한후에 flex를 사용할 수 있다.

flex의 속성에는 flex-direction과 flex-wrap이

있다.

flex-direction

주 축을 지정하는 속성이다.

row,row-reverse,column,column-reverse가 있다.

row:왼쪽에서 오른쪽으로 정렬

row-reverse:오른쪽에서 왼쪽으로 정렬

column:위에서 아래로 정렬

column-reverse:아래에서 위로 정렬

사용 예제)display:flex;

flex-direction:row;

flex-wrap

wrap과 nowrap을 사용 할 수 있다

wrap을 사용하면 flex 컨데이너에 들어가있는 항목들이 flex 컨데이너보다 클 경우에

넘쳐흐르는 것을 방지하여 줄을 내리는 것을 의미한다.

nowrap은 넘쳐 흐르던 말던 그냥 쓰는 것을 의미한다.

flex-direction + wrap —> flex-flow

flex-flow:row wrap;—> 두가지 속성을 동시에 지정할 수 있다.
