# CSP

## content security policy

Content Security Policy로 웹 브라우저에서 사용하는 컨텐츠 기반의 보안 정책이다.

웹에서 사용하는 content(사진, script) 등을 관리하는 정책이라고 생각하면 됩니다.

SOP(same origin policy)와 비슷하다고 생각 할 수 있지만, 

CSP는 설정하지 않을 수도 있어서, 브 바 브(브라우저 바이 브라우저), 웹 바 웹(웹 바이 웹)이다.

* Content-Security-Policy : W3C에서 지정한 표준헤더, 대체로 이걸 사용함

* X-Content-Security-Policy : Firefox/IE 구형 브라우저에서 사용되는 헤더

* X-WebKit-CSP : Chrome 기반의 구형 브라우저에서 사용되는 헤더

  이 헤더는 통신 할 때, header에 넣어주면 된다.

```
Content-Security-Policy: default-src 'self'
```

하위 도메인의 content만 사용 할 수 있게 하는 header

```
Content-Security-Policy: default-src 'self' *.trusted.com
```

특정 태그 계열만 허용하는 header

```
Content-Security-Policy: default-src 'self' *.mailsite.com; img-src *
```

특정 도메인은 ssl 통신 하도록 하는 header

```
Content-Security-Policy: default-src https://onlinebanking.jumbobank.com
```



header에 들어가는 속성들을 보자

* default-src : 모든 리소스에 대한 정책(아래 것들 다 포함)
* script-src : Javascript 등 웹에서 실행 가능한 스크립트에 대한 정책
*  object-src : 플러그인, 오브젝트에 대한 정책
* style-src : style, 즉 css에 대한 정책
*  img-src : 이미지
* media-src : video, audio
*  frame-src : iframe, X-Frame 헤더랑은 비슷한 역할을 하지만, 약간 다르죠.
*  font-src : font
*  connect-src : script src로 불러올 수 있는 url에 대한 정책
* form-action : form 태그 내 action 부분에 대한 정책
*  sandbox : HTML 샌드박스
*  script-nonce : 위에 script-src + 아래쪽에 none 이 포함되는 정책, 약간 강한..
*  plugin-types : 로드할 수 있는 플러그인 타입, 위에 object-src와 접점
*  reflected-xss : X-XSS-Protection header와 동일한 효과
*  report-uri : 정책 위반 케이스가 나타났을 때 내용을 전달할 URL