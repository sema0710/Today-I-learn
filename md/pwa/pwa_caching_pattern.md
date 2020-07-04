# PWA Caching Pattern

### 이 글은 "만들면서 배우는 프로그레시브 웹 앱"을 정리한 글입니다.

## 🤔캐싱 패턴...?🤔

캐싱패턴이라... 프론트 개발자에게는 조금 생소한 주제일 수 있다.

하지만 요새 트렌드의 방향이 PWA인 만큼 캐쉬에 대해서 자세하게 알아보도록 하자.

여기서 캐싱 패턴이란, serviceWorker에 캐싱된 데이터를 어떻게 이용할 지 정하는 것을 말한다.

### 캐시만 허용

우선 가장 기본적인 패턴인 <strong>캐시만 허용</strong>에 대해서 알아보자.

진짜로 캐시에 있는 데이터만 사용하는 패턴이다. 캐시에서 파일을 찾지 못하면 모두 에러 처리가 된다.

대체로 로고나 아이콘, style sheet 같은 <strong>정적인 리소스</strong>를 처리하는데 유용하다.

```javascript
self.addEventListner("fetch",( event )=>{
	event.respondWith(
		caches.match(event.request).then((response) => {
			return response;
		})
	)
})
```



### 캐시, 실패하면 네트워크

이 패턴은 캐시에 먼저 접근해 본 후에, 실패할 경우에 네트워크로 콘텐츠를 전송하는 패턴이다.

```javascript
self.addEventListner("fetch",( event )=>{
	event.respondWith(
		caches.match(event.request).then((response) => {
			return response || fetch(event.request);
		})
	)
})
```

### 네트워크만 허용

우리가 원래 사용하는 패턴이다. 모든 리소스를 네트워크에서 가져온다. 

### 네트워크, 실패하면 캐시

우선 네트워크로 요청을 보내고 실패하면 캐싱된 데이터를 가져오는 형태다.

```javascript
self.addEventListner("fetch", (event) => {
	event.respondWith(
		fetch(event.request).catch(()=> {
			return caches.match(event.request);
		})
	)
})
```

### 캐시 이후 네트워크

네트워크에서 최신 버전을 체크하는 동안에 캐시에서 데이터를 가져와 사용한다.

네트워크 응답을 받으면, 캐시보다 최신 버전인지 확인하고, 새 콘텐츠를 보여준다.

### 대체 리소스

사용자가 원하는 콘텐츠가 캐시에 없고, 네트워크도 없으면 기본적으로 사용되는 리소스

default fallback을 반환한다.

### 처음에는 네트워크, 그 이후에는 캐시

처음에는 기본적으로 캐싱하지 않고 있다가, 한번 접속하면 캐싱 한 후에 다음 접속때 캐쉬된 데이터를 보여주는 형식.

```javascript
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.open("cache-name").then((cache)=> {
			return cache.match(event.request)
        .then((cachedResponse)=> {
          return cachedResponse || fetch(event.request)
            .then((networkResponse)=>{
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
          })
			})
		})
	)
})
```

### 캐시 그 이후에 네트워크를 사용하여 캐시 업데이트

말 그대로 캐시를 이용하고 캐시 이후에 네트워크를 사용하여 항상 업데이트를 해주는 패턴을 말한다.

```javascript
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.open("cache-name").then((cache)=> {
			cache.match(event.request).then((cachedResponse)=>{
				const fetchPromise = fetch(event.request).then((networkResponse)=> {
					cache.put(event.request, networkResponse.clone());
					return networkResponse;
				});
				return cachedResponse || fetchPromise;
			})
		})
	)
})
```

