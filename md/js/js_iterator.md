# what is iterator?

iterator는 ES6에서 도입된 현재 어디에 있는지 알 수 있는 책갈피와 같은 문법입니다.  

```
const value = ["hello" , "world" , "nice" , "to" , "meet" , "you"];
const it = value.values();

```

기본적으로 iterator는 values()라는 함수를 사용해서 만듭니다.  
그리고 그 요소 하나하나를 책의 한 페이지 처럼 사용 할 수 있습니다.

```
it.next();//{"hello"...};
it.next();//{"world"};
.
.
.
it.next();//{"undefined"};

```

iterator가 마지막에 다다르면, undefined를 뱉어냅니다.  
그 이후로는 뭘 하던지 undefined를 뱉습니다.

# iterator protocol?

iterator protocol은 모든 객체를 이터러블하게 바꿀 수 있습니다.  

```
class Log{
    constructor(){
        this.message = [];
    }
    add(message){
        this.message.push({message,timestamp : Date.now()});
    }
    [Symbol.iterator](){
        return this.message.values();
    }
}
```
이런 코드를 작성해서 
```

const log = new Log();
log.add("what");
log.add("the");
log.add("buck");

for(let entry of log){
    console.log(`${entry.message} @ ${entry.timestamp}`);
}

```

그러면 log를 배열같이 순회하게 됩니다.

ex)
```

class Fibo{
    [Symbol.iterator](){
        let a=0,b=1;
        return{
            next(){
                let rval = { value : b , done : false };
                b += a;
                a = rval.value;
                return rval;
            }
        }
    }
}

