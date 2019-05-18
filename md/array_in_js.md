# array in js
## push,pop
    push는 맨 뒤에 요소를 추가 한 뒤에 늘어난 길이를 반환한다.  
    pop은 맨 뒤의 요소를 삭제 한 뒤에 삭제한 요소를 반환한다.  
    shift는 맨 앞의 요소를 삭제 후에 삭제한 요소를 반환한다.  
    unshift는 맨 앞에 요소를 추가한 후에 늘어난 길이를 반환한다.  
> const arr = [1,2,3,4];    
arr.push(5);//5,[1,2,3,4,5]    
arr.pop();//5,[1,2,3,4]    
arr.shift();//1,[2,3,4]    
arr.unshift(0);//4,[0,2,3,4]  

## push * num --> concat
    배열의 끝에 여러 요스를 추가한 사본을 반환한다.--> arr값은 변하지 않는다.
>   const arr = [1,2,3];  
    arr.concat(4,5,6);  
    arr.concat([4,5],6);

## slicing 
    배열의 일부를 가져올때 사용하는 method --> slice  
    slice는 매개변수를 2개를 받는데, 한개는 어디서 부터 자를 것인지를 정하는 것이고 다른 하나는 어디까지 자를지를 정한다. index는 0부터 시작한다.   
    음수 인덱스를 사용하면 배열의 뒤에서 부터 지정한다.
 >   const arr = [1,2,3,4,5];  
    arr.slice(3); // [4,5]; --> arr변경은 없다.  
    arr.slice(2,4); // [3,4]; --> arr변경은 없다.  

## splice
    이 함수는 배열을 자유롭게 수정이 가능하게 한다.  
    첫번째 매개변수는 어느 인덱스에서 부터 수정을 시작할 것인지를 정한다.  
    두번째 매개변수는 제거할 숫자 요소를 넣는다.
    나머지 매개변수는 배열에 추가할 요소를 넣는다.
    만약 이것들 중 아무것도 넣지 않으려면 0을 넣으면 된다.
    이것을 쓰면 배열이 변한다. 사용 자체로 변한다.
>    const arr = [1,5,7];  
    arr.splice(1,0,2,3,4); // arr는 이제 [1,2,3,4,5,7]이다.  
    arr.splice(1,2); // arr는 이제 [1,4,5,7]이다.  

## 배열에서 요소를 복사하여 붙여넣기  

    copyWithin은 ES6에서 추가된 새 메서드 이다.
    배열 요소를 복사 후 다른 위치에 붙여넣고, 기존의 요소를 덮어쓴다.
    첫번째 매개변수는 복사한 요소를 붙여넣을 index를 넣는다.
    두번째 매개변수는 복사할 요소의 index를 넣는다.
    세번째 매개변수는 복사를 끝낼 위치이다.
    음수 인덱스를 사용하면 배열의 끝에서 부터 센다고 한다.
    이 method를 사용하면 배열의 값이 바뀐다.
> const arr = [1,2,3,4];  
arr.copyWithin(1,2); // --> arr는 이제 [1,3,4,4]입니다.  
arr.copyWithin(2,0,2); // arr는 이제 [1,3,1,3]입니다.  

## fill  
특정한 값으로 배열을 채우는 메소드 이다.  
배열의 일정 부분만 값으로 넣으려면 처음과 끝의 인덱스를 매개변수로 넣어주자.  
음수 인덱스도 사용이 가능하다.  
arr의 값을 바꾼다.
> const arr = new Array(5).fill(1); // --> [1,1,1,1,1];
arr.fill("a"); // --> [a,a,a,a,a];
arr.fill("b",1); // --> [a,b,b,b,b];

## sort,reverse  
### reverse  
    배열의 요소 순서를 반대로 바꾼다.  
> const arr = [1,2,3,4,5];  
arr.reverse(); // --> arr = [5,4,3,2,1];  
### sort
    말 그대로 정렬  
    배열의 값을 바꾸는 메소드다.
    매개변수를 함수로 받는다.
    뭔...망할 map도 아니고..왜 함수로 받지..
> const arr = [1,4,5,3,6];
arr.sort(); --> arr = [1,3,4,5,6];

## 배열 검색
    배열 안에서 뭔가를 찾으려고 할때는 여러가지를 사용 할 수 있다.

### indexOf , lastindexOf
    indexOf는 찾고자 하는 것과 정확히 일치(===) 하는 첫번째 요소의 인덱스를 반환합니다.  
    lastindexOf는 배열의 끝에서 부터 찾는다. 마치 음수 인덱스같구만    
    이 두개는 못찾으면 -1을 반환한다.  
> const o = {name : "jarry"};    
const arr = {1,5,"a",o,true,5,[1,2],"9"};   
arr.indexOf(5); // --> 1  
arr.lastindexOf(5); // --> 5  

### findindex
indexOf와의 다른점은 보조함수를 사용하여 검색 조건을 지정할 수 있는 것이다.    
하지만 시작 인덱스를 지정 할 수 없고, 뒤에서부터 찾는 findLastIndex같은 건 없음.    

> const arr = [{id:5,name:"judith"},{id:7,name:"francis"}];      
arr.findIndex(o => o.id === 5); // {id:5,name:"judith"}의 위치인 0을 반환 없으면 -1    

### find
find는 위치가 아니라 그 값 자체를 반환한다.  
만약에 없으면 undifined를 반환한다.
> const arr = [{id:5,name:"judith"},{id:7,name:"francis"}];
arr.find(o => o.id === 5); // {id:5,name:"judith"} 반환

find와 findindex에 전달하는 함수는 배열의 각 요소를 첫번째 매개변수로 받고, 현재 요소의   인덱스와 배열 자체도 매개변수로 받는다.  
이런 것은 다양하게 이용 할 수 있단다.  
특정 인덱스보다 뒤에 있는 제곱수를 찾아야 한다면?
> const arr = [1,17,16,5,4,16,10,3,49];  
arr.find((x,i) => i > 2 &&Number.isInterger(Math.sqrt(x))); // 4  

 


