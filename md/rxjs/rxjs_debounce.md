# debounce

여태까지 나온 연산자와 생성자와는 다른 난이도를 가진 연산자다.

이 연산자의 마블 다이어그램을 살펴보자.

![Image result for rxjs debounce marble"](https://rxjs-dev.firebaseapp.com/assets/images/marble-diagrams/debounce.png)

이 마블 다이어그램 사진을 보면, b가 시작한 뒤에 끝나지 않고 c가 실행 되었는데, 이렇게 되면, 기존에 실행되던

b의 값은 나오지 않게 된다. 고급진 표현으로 b가 끝나기 전에 다른 행동이 실행되면 b가 씹힌다.



## example

```javascript
interval(400).pipe(
    take(4),
    debounce(srcVal => interval(
        srcVal % 2 === 0 ? 400 * 1.2 : 400 * 0.8
    ).pipe(
        tap(innerVal => console.log(
            `sourceInterval value: ${srcVal}
innerInterval value : ${innerVal}`
        ))
    ))
).subscribe(x => console.log(`result: ${x}`));
```

이 예시를 보면, interval로 0,1,2,3을 넣었는데, debounce로 홀수면 400 * 0.8 ms후에 실행하고, 

짝수면 400 * 1.2 ms후에 실행한다. 따라서, 밖의 interval이 다음 행동으로 넘어가기 전에 안의 interval의 대기가 

끝나면, result가 찍히고, 아니면 씹힌다.

이 코드를 실행해 보면 안쪽 interval로 실행되는 것은 1일 때만 실행되는 것을 알 수 있는데, 그 이유는 3일 때, 실행되기 전에 complete가 실행되기 때문이다. (take(4)때문에)

