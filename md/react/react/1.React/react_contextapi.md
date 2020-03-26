# react context api

 이 포스트는 'react를 다루는 기술'을 읽은 후에 정리한 것임을 밝힙니다.

### what is context api

우선 react 개발자라면 항상 느끼는 것이 있을 것이다.

무엇을 개발하던지, jwt토큰이라던가, 유저의 정보같은 것들은 모든 component에서 가지고 있어야 하지만,

props로 넘겨주기 정말 귀찮다는  것을 느끼지 않는가?

![Image result for react context êµ¬ì¡°"](https://i.imgur.com/tmOeRAT.png)

원래 state를 props로 이런 형태로 넘겨야 한다면 context를 사용하면

![Image result for react context êµ¬ì¡°"](https://i.imgur.com/iyNKCIz.png)

이렇게 context를 이용해서 어느 component던지 넘길 수 있게 된다.



### how to use react context?

일단 context를 만들자.

```javascript
import { createContext } from 'react'
```

이 코드로 context를 만드는 함수를 불러 올 수 있다.

그럼 context를 만들어 보겠다.

```javascript
import { createContext } from 'react'

const ColorContext = createContext({ color: 'black'});

export default ColorContext;
```

이렇게 하면 context의 기본값을 color: 'black'으로 준 후에 생성 할 수 있다.

다음은 사용하는 코드를 보겠다.

우선 context는 2가지로 분류 할 수 있다.

정보를 사용하는 consumer와 정보를 변경하는 provider.

consumer부터 보겠다.

```jsx
import React from 'react'
import ColorContext from './export한 위치'

const ColorDiv = () => {
	return (
		<ColorContext.Consumer>
			{
				value => (
					<div 
						style={{
							width:'64px',
							height:'64px',
							background: value.color,
						}}
					/>
				)
			}
		</ColorContext.Consumer>
	)
}
```

이렇게 하면 ColorContext.Consumer에서 childern props로 저 코드를 받아서 render 시킬 것이다.

그 때, ColorContext에 있는 color: 'black'을 받아서 value로 넣어준다. 따라서 background를 검은색으로 만든다.

그럼 provider 코드를 살펴보자.

```jsx
import React from 'react'
import ColorDiv from './ColorDiv위치'
import ColorContext from './ColorContext위치'


const App = () => {
	return (
		<ColorContext.Provider value={{color: 'blue'}}>
			<ColorBox/>
		</ColorContext.Provider>
	)
}

export default App;
```

이렇게 하게 되면, ColorBox에서 Consumer를 이용하여 color: 'black'을 사용 할 때, Provider로 blue로 바꿨기 때문에, 파란색으로 변경된다. 이 때, value는 반드시 있어야 하며, 없으면 에러가 난다.



### 동적 context 사용하기

우선, 위에서 했던 내용대로 쓰게 되면 value에 정적인 값만 넣을 수 있게 된다.

그러면 동적으로 context를 사용하려면 어떻게 해야 할까?

 위에서 사용했던, ColorContext의 코드를 변경하겠다.

```jsx
import React,{ createContext, useState } from 'react'

const ColorContext = createContext({
    state:{ color: 'black' },
    actions: { changeColor: ()=>{} },
});

const ColorProvider = ({ childern }) => {
    const [color, setColor] = useState('black');
    
    const value = {
        state: { color },
        actions: { setColor },
    }
    
    return (
    	<ColorContext.Provider value={value}>{childern}</ColorContext.Provider>
    )
}

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };
export default ColorContext;
```

이렇게 되면, Consumer에서 actions를 받아와서 color를 변경 할 수 있고, value도 항상 채워져 있기 때문에, 에러가 나지 않는다.	