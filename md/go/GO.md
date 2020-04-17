# GO

## Main Package

go 언어에서 실질적인 compile이 일어나는 곳은 main.go 파일 안에 있는 func main() 이다.

```go
package main

func main() {
	// sth...
	// 컴파일이 실행되는 곳
}
```

## import

go 언어에도 js나 python 같이 module을 import 해올 수 있다.

go 언어는 js 에서 사용하는 npm 이나 python의 pypi같이 폴더 당 모듈을 다운받는 것이 아닌,

C:/GO 에 모든 모듈을 다운 받아 놓아야 한다.

```go
package main

import "fmt"

func main(){
	fmt.Println("sth")
}
```

참고로 개인적으로 module을 만들어서 사용할 때는, func의 이름을 대문자로 해야지만, 파일에 접근해서 사용 할 수 있다.

소문자는 끌어 올 수 없다.

## variables and constance

go언어에서 변수를 선언할 때에는, 자료형을 지정해 주어야 한다.

그리고 변수를 선언할 때는 var, let, const 를 사용한다.	

```go
var sth string = "sth"
```

이렇게 하면, 자료형을 지정해야 하는 번거로움이 있지만, 

변수에 넣는 값을 이용해서 자료형을 지정하는 방법이 있다.

```go
sth := "sth"
// var sth string = "sth"과 같다.
```

이렇게 하면, sth의 자료형은 "string"이 된다.

## function

함수는 func를 이용해서 사용한다.

매개변수와 반환값에도 모두 자료형을 지정해 주어야 한다.

```go
func sth(value1 string) int {
	return value1
}
```

여기서 go 만의 특별한 기능이 하나 있다.

return 값을 여러개 줄 수 있는 기능이 있다.

```go
func sth(value1 string, value2 int) (int, string) {
	return value1, value2
}


func main() {
    value1, value2 := sth("sth",1)
}
```

그리고 이건 정말 유용한 기능이라고 생각되는 dafer 기능이 있다.

이 기능은 함수가 종료되었을 때, 실행되는 줄을 만들 수 있는 기능이다.

```go
func sth(value1: string) {
	dafer fmt.Println("end")
	fmt.Println("start")
}
```

## for, range, ...args

go 언어에는 forEach, while,  map 같은 함수들이 없다

오직 for 만 있을 뿐이다. for문을 사용하는 것은 다른 언어와 비슷하다

```go
func loop(numbers ...int) int {
	number := 0
	for _, value := range numbers {
		number += value
	}
	// bad code
	// for i := 0; i < len(numbers); i++ {
	// 	number = number + numbers[0]
	// }	
	return number;
}
```

여기에 나오는 range는 배열을 순차적으로 돌려주는 javascript의 map같은 녀석이라고 보면 된다.

range에서 _, value로 받는 것을 볼 수 있는데 첫번째에는 index가 반환되고

두번째에서는 배열의 값이 반환된다.

...int는 매개변수로 int 형을 계속 받아 올 수 있다.

```go
loop(1,2,3,4,5)
```

이렇게 될 경우 배열로 이 값들이 들어오게 된다

[1 2 3 4 5] 처럼

## if

다른 언어의 if문과 같다

```go
func canIDrink(age: int) bool {
	if(age > 18){
		return true
	}
	return false
}
```

그리고 if문에서 사용 할 수 있는 기능이 하나 있는데,

바로 if문에서 변수를 하나 선언 할 수 있다는 것이다.

if문 진행 전에 처리해야 되는 연산을 하기 좋다.

```go
if koreanAge = age + 2; (koreanAge > 20){
	return true
}
return false
```

## pointer

개인적으로 go언어가 가장 재밌다고 생각했던 이유는, high level language인줄 알았는데, pointer가 있다는 것이였다.

pointer는 한 변수의 값이 저장된 주소를 가리키는 변수로, lower level에서 자주 사용한다.

대부분 쓰레기 수집가(ㅎㅎ)가 처리해주기 때문에 c나 c++을 하지 않았으면 몰랐을 것이다.

```go
a := 1
b := &a 
// a의 주소가 담겨있다.
// & 연산자가 변수의 주소를 가져온다.
fmt.Println(a,*b) // --> 1 1
// * 연산자는 주소를 따라서 주소에 있는 값을 가져온다.
a = 2
fmt.Println(a,*b)// --> 2 2
// 주소로 연결되어 있기 때문에, a의 값을 바꾸면 *b의 값도 변한다.
```

## array, slice

go언어에서 배열을 사용하는 법은 2가지가 있다.

c언어 스럽게 배열을 사용하려면 array를 사용하면 되고, 

javascript나 python같이 배열을 사용하려면 slice가 필요하다.

```go
// like c
arr1 = [5]string{"s","t","h","!","!"} // array
// like python or js
arr2 = []string{"s","t","h"} // slice
append(arr2,"sth!")
```

여기서 arr1에서는 4 이상의 index는 사용 할 수 없다.

arr2에서는 append로 계속 사이즈를 늘릴 수 있다.

### Maps

javascript나 python을 한 사람들은 object로 착각할 수도 있지만

key와 value의 자료형을 지정해두고 사용해야 하는 object라고 생각하면 된다.

```go
func mapTest(){
	test := map[string]string{"t":"e","s":"t"}
	// 저렇게 자료형을 설정한대로만 사용 가능
	fmt.Println(test)
}
```

## Structs

우리가 흔히 생각하는 object와 비슷하다

```go
type person struct {
	name string
	age int
	family []string
}

func structTest(){
	family := 	[]string{"mother","father","brother","sister"}
	// object + class
	human1 := person{"sema",18,family}
	human2 := person{
		name: "sema",
		age: 18,
		family: family,
	}
	fmt.Println(human1);
	fmt.Println(human2);
}
```

