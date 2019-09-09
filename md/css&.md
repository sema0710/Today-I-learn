# what is & in css?

간단한 예제로 알아보자

```
    a{
        color:blue;
        &:active{
            color:red;
        }
    }
```
이 코드는 밑의 코드와 같다.  

```
    a{
        color:blue;
    }

    a:active{
        color:red;
    }

    그냥 코드를 간단하게 쓰기 위한 용도 인 듯 하다.  
    