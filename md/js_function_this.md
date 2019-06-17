# this in function
## what is this?
this는 함수와 class에서 사용되는 개념입니다.(어차피 함수도 method니까 똑같은건가?)  
this는 호출자를 의미한다.
> function test(){
    return this;
}
test(); --> window 반환
test는 window의 메소드 이기 때문에 window가 반환된다.

## 생성자와 this
> function test(name,color){
    this.name = name;
    this.color = color;
    console.log(name,color);
    return this;    
}
let t = new test(ohjunsang,gray);
