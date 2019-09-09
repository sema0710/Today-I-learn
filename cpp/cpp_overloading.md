# overloading

함수 오버로딩 : 동일한 이름의 함수를 중복하여 정의하는 것  
매개변수의 타입이 다르거나 개수가 다르면 가능.  
return 형이 같아도 안된다.  

만약에 overloading이 return값의 형식에도 적용된다면, 호출 시,   
매개변수의 타입과 개수가 같으면, 구분이 안되기 때문에, 안됨.  

void func(int n);  
void func(int &n);  // overloading 불가능

void func(int n);
void func(const int n); // overloading 가능

### overloading할때 tip

오버로딩 할때 과연, main에서 구분할 수 있는가?를 생각해봐라.  
