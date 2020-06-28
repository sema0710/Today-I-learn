export class Point {
    /*
    한번에 웨이브를 그려낸다기보다는
  
    웨이브는 화면에 간격을 가진 점을 찍고 
    그 점 사이를 곡선으로 연결하는 방식이라고 이해하면 쉬움
  
    웨이브를 그리는데 이용되는 점들은
    아래 위로 랜덤하게 offset 값을 가짐
    */
    constructor(index, x, y) {
      this.x = x;
      this.y = y;
      this.fieldY = y; // 기본 Y 중심
      this.speed = 0.1;
      this.cur = index;
      this.max = Math.random() * 150 + 100;
    }
  
    update() {
      /* 
      스피드만큼 cur 값이 더해짐 
      cur 값은 계속 커지지만,
      y값은 sin함수의 주기를 따르기 때문에 무한히 -1 ~ 1 사이를 반복함
      */
      this.cur += this.speed;
      /*
      y값이 sin(cur) * max 만큼 늘어남 
      sin(cur)는 sin함수의 주기에 따라 -1에서 1까지 반복
      -1 ~ 1까지의 값에 max(150 ~ 250)값을 곱해줌
      */
      this.y = this.fieldY + Math.sin(this.cur) * this.max;
    }
  }