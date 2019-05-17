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
    const arr = [1,2,3];  
    arr.concat(4,5,6);  
    arr.concat([4,5],6);

## slicing 
    배열의 일부를 가져올때 사용하는 method --> slice
    const arr = [1,2,3,4,5];
    arr.slice(3); z

