# react testing

### Enzyme를 이용하여 react app을 test 하는 법

우선, Enzyme를 깔아야 한다.

```
npm install --save enzyme enzyme-adapter-react-16
```

그리고 react app에서 src 폴더에 setupTests.js를 만들고 이 코드를 치자.

```javascript
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

그 다음 user라는 component를 만들자, props로 name과 age를 받는다.

```jsx
import React from 'react'

const User = ({name,age}) => {
	<div>
    	<p>{name}</p>
        <p>{age}</p>
    </div>
}

export default User;
```

그리고 App.js에서 render 해준다.

```jsx
import React from 'react';
import User from './User';

function App() {
  return (
    <div>
      <User age={18} name="오준상" />
    </div>
  );
}

export default App;
```



### 스냅샷 테스트

스냅샷 테스트는 동일한 props 일 때, 랜더링 결과가 이전과 같은지 비교하는 테스트입니다.

그전에 스냅샷 테스트는 하나를 더 추가해야 합니다.

```
npm install enzyme-to-json
```

그리고, package.json에서 jest를 추가한 후 이 코드를 추가해 주세요.

```json
"jest": {
    "snapshotSerializers": ["enzyme-to-json/serializer"]
}
```

그리고 User.test.js를 이렇게 작성하면 test할 수 있습니다.

```jsx
import React from 'react';
import { mount } from 'enzyme';
import User from './User';

describe('<User />', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<User age={18} name="김민준" />);
    expect(wrapper).toMatchSnapshot();
  });
});
```

describe는 test들의 묶음이라고 생각하면 된다. it이 test 하나이다. 

그리고 mount는 component를 render 시켜준다. 나중에 가면 shallow라는게 나오는데,

그것과 mount의 다른점은, render 하는 컴포넌트 내부에 또다른 리액트 컴포넌트가 있다면 

이를 렌더링하지 않는다.

이 후에 'npm test'를 하게 되면,

폴더가 하나 생길 건데, 그 폴더안을 들어가 보면, 파일이 있는데,

그 파일이 렌더링 된 결과이고, 다음에 test할 때는 그 결과와 비교해서 testing 한다.



### props 접근

```jsx
it('renders username and name', () => {
    const wrapper = mount(<User age={18} name="김민준" />);
    expect(wrapper.props().age).toBe(18);
    expect(wrapper.props().name).toBe('오준상');
});
```

이렇게 하면 wrapper에 담긴 component의 props에 접근 할 수 있다.

그 props를 이용하여 test를 할 수 있게 된다.



### DOM 확인

```javascript
const pElement = wrapper.find('p');
```

이 코드는, js의 document.querySelector와 비슷하다.

하지만 tag만 된다.



### class형 components testing

이 부분은 velopert님의 코드를 인용하겠다.

원본은 [https://velog.io/@velopert/react-testing-with-enzyme#dom-%ED%99%95%EC%9D%B8](https://velog.io/@velopert/react-testing-with-enzyme#dom-확인)

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  };
  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  };
  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.number}</h2>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
```

이런 코드를 짰다. 여기서 test를 할 때, state를 이용해서 test를 해야한다면?

```jsx
import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('<Counter />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });
  it('has initial number', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state().number).toBe(0);
  });
  it('increases', () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleIncrease();
    expect(wrapper.state().number).toBe(1);
  });
  it('decreases', () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleDecrease();
    expect(wrapper.state().number).toBe(-1);
  });
});
```

여기를 보게 되면, SnapShot은 위에서 설명했다.

처음보는 함수는 instance인데, instance는 class의 method를 끌고오는 역할을 한다.

그래서 instance에서 handler들을 끌고와서 그 후에 state를 비교하는 test를 진행하는 것이다.
