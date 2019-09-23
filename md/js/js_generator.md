# what is generator in javascript?


Generator는 빠져나갔다가 나중에 다시 돌아올 수 있는 함수입니다. 이때 컨텍스트(변수 값)는 출입 과정에서 저장된 상태로 남아 있습니다.

Generator 함수는 호출되어도 즉시 실행되지 않고, 대신 함수를 위한 Iterator 객체가 반환됩니다. Iterator의 next() 메서드를 호출하면 Generator 함수가 실행되어 yield 문을 만날 때까지 진행하고, 해당 표현식이 명시하는 Iterator로부터의 반환값을 반환합니다. yield* 표현식을 마주칠 경우, 다른 Generator 함수가 위임(delegate)되어 진행됩니다.

이후 next() 메서드가 호출되면 진행이 멈췄던 위치에서부터 재실행합니다. next() 가 반환하는 객체는 yield문이 반환할 값(yielded value)을 나타내는 value 속성과, Generator 함수 안의 모든 yield 문의 실행 여부를 표시하는 boolean 타입의 done 속성을 갖습니다. next() 를 인자값과 함께 호출할 경우, 진행을 멈췄던 위치의 yield 문을  next() 메서드에서 받은 인자값으로 치환하고 그 위치에서 다시 실행하게 됩니다.

(개사기)  


```

function* generator(i) {
  yield i;
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);

```