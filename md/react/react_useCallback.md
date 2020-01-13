# useCallback

### useCallback? 뭐여 이게?

흠...react hooks가 정말 좋은 이유는, 상황에 맞는 hook들을 잘 마련해 준다.     <s>랩 할때 편할듯</s>

우선 알고 넘어가야 할 것이 있다. react로 상위 state를 변경하기 위해서 props로 function을 넘겨줄 때가 있다.

생각나는가? 그럴 때, render 될 때 마다, function이 다시 선언된다는 것을 아는가?

그 때, 속도 저하가 심하게 된다. 우리는 개발자니까, 이런 경우를 없애는 것이 좋다.

### 오! 어떻게 써요?

```
import React, { useCallback, useState } from 'react'

const test = () => {
	const [test,testChange] = useState();
	const changeTest =  useCallback((e)=>{
		testChange(e);
	},[])
	
	return(
		<sth testChange={testChange}></sth>
	)
}
```

그냥 요로코롬 짜주면, test가 변하더라도 다시 선언되지 않고 유지된다.

그럼 react app의 속도를 향상시킴과 동시에, 쓸모없는 render 도 줄일 수 있다.