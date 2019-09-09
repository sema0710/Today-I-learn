# cpp default value in function

cpp 에서는 함수의 매개변수에 default값을 넣을 수 있다.   

```
int function a(int num = 7){
    return num+1;
}

int main(){
    num = a(); // 8
    num2 = a(6); // 7
}

```

### 부분적 default

```
void function test(int a,int b = 7,int c = 5){
    cout << a + c + b;
}

int main(){
    test(5);
    test(5,7);
    test(5,7,8);
    test()//error!

}
```

### default 규칙

default는 매개변수의 뒤에서 부터 선언한다.  

