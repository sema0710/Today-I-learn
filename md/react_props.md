# react props
컴퓨넌트 내부의 immutable data(변하지 않는 데이터)를 처리하기 위해서 사용  

jsx 안에 {this.props.propsName}을 사용하면 됩니다.
컴포넌트를 사용 할 때, <> 안에 propsName-"value"를 해주면 된다.  
this.props.children은 기본적으로 갖고있는 props로 만약에 컴포넌트 이름이 테스트일 경우 <테스트>이 값이 들어간다</테스트> <-- 다음과 같이 들어간다.  

https://codepen.io/sema0710/pen/qzZBZV

props 기본값을 설정하려면 component.defaultProps = {...}를 하면 됩니다.  

props 값의 타입을 검사하려면, component.propTypes = {...}