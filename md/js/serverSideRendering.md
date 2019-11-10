# server Side Rendering and client Side Rendering

## 그래서 그게 뭔데?

server side rendering = 서버에서, html을 다 짜서 client로 보내주는 것을 말한다.  

client side rendering = 클라이언트에서, 변경 사항은 request로 받아서 자체적으로 바꿔주는 것을 말한다.

## 뭐가 더 좋아요?

각자의 장점을 가지고 있다.   

### serverSideRendering  
serverSideRendering은 일단 서버에서 코드를 가지고 있기 때문에,  
서버로 통신 한번만 하면 그냥 띄워지기 때문에, 초기 로딩은 빠르지만,  
그 통신을 계속 하다보면, 상대적으로 속도가 느려지게 된다.  

### clientSideRendering  
clientSideRendering은 client에서 모든 코드를 가지고 있기 때문에, 상대적으로는 serverSideRendering보다 느리다.  
하지만, 변경점은 server로 부터 request를 보내서, 변경할 부분만 바꾸기 때문에,
상대적으로 serverSideRendering보다 빠르다.    

그리고 serverSideRendering의 장점이 하나 더 있는데, 검색엔진에서 좋아한다.  
clientSideRender를 하는 react가 render 되기 전에 코드를 f12를 눌러 보면, code가 비어있는 것을 확인 할 수 있다.    
그래서 clientSideRendering은 검색엔진 최적화가 어렵지만 serverSideRendering은 편하다.  

