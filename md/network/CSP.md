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

