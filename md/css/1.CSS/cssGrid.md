# what is grid in css?

웹을 칸을 나눠서 디자인하는 느낌의 css 문법이다.

## grid-column , grid-row
원하는 item에 이 css 를 적용시키면 범위를 설정할 수 있다.
```
.item {
  grid-column-start: <number> | <name> | span <number> | span <name> | auto;
  grid-column-end: <number> | <name> | span <number> | span <name> | auto;
  grid-row-start: <number> | <name> | span <number> | span <name> | auto;
  grid-row-end: <number> | <name> | span <number> | span <name> | auto;
}
```
![Alt text](https://css-tricks.com/wp-content/uploads/2018/11/grid-column-row-start-end-01.svg)

## grid-template-columns , grid-template-rows
grid 격자를 생성함과 동시에, 크기를 정해줌.

```
.container {
  grid-template-columns: 40px 50px auto 50px 40px;
  // 40px 50px auto 50px 40px 의 가로 크기
  grid-template-rows: 25% 100px auto;
  //25% 100px auto 의 세로 크기
}
```

![Alt text](https://css-tricks.com/wp-content/uploads/2018/11/template-columns-rows-01.svg)
