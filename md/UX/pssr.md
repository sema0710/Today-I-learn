# PSSR

## CSR

**Client Side Rendering**(클라이언트 사이드 렌더링)

html을 클라이언트에서 주고, javascript로 서버에 요청해서 내용을 채우는 방식이다.

<img src="https://miro.medium.com/max/1400/1*vKrzuL0dy60XAI8GS521pA.png"/>

출처(https://medium.com/the-thinkmill/progressive-rendering-the-key-to-faster-web-ebfbbece41a4)

다음과 같은 형식으로 이루어 지는데, html 프레임을 가지고 있고 그 안에 컨텐트들은 javascript로 인한 통신 후에 만들어 진다.

<img src="https://miro.medium.com/max/1400/1*GvuX8GaVLOQivzwyLXaV2A.png"/>

출처: (https://medium.com/the-thinkmill/progressive-rendering-the-key-to-faster-web-ebfbbece41a4)

한 부분이 가져오는 것은 다음과 같이 이루어 진다.

특징으로는 초반 렌더링이 매우 느리지만, 그 이후에 변경은 매우 빠르다.

## SSR

**server side rendering**(서버 사이드 렌더링)

html을 렌더 해서 서버에서 가져오는 것이다.

<img src="https://miro.medium.com/max/1400/1*yD9-0iK2Ul8cAnOvIbwKng.png"/>

출처(https://medium.com/the-thinkmill/progressive-rendering-the-key-to-faster-web-ebfbbece41a4)

다음과 같이 진행된다. 

그림과 같이, 안에 view들이 모두 생긴 후에 사용자에게 나오게 되므로, 사용자 입장에선 준수한 속도로 나오는 것 처럼 보인다. 하지만, 변경사항이 있을 경우 서버에서 다시 render 해서 html을 넘겨주기 때문에, 속도가 항상 똑같지만, 느리지도 빠르지도 않은. 애매한 속도를 자랑한다.

## PSSR

**Progressive Server Side Rendering**(프로그레시브 서버 사이드 렌더링) 

CSR과 SSR의 장점만 모아놓은 방식이라고 볼 수 있다.

<img src="https://miro.medium.com/max/1400/1*i5WWiWt3t3rAS7hgxRTuBQ.png"/>

출처: (https://medium.com/the-thinkmill/progressive-rendering-the-key-to-faster-web-ebfbbece41a4)

부분부분마다 서버에서 렌더링을 시키고, 렌더링 된 부분을 사용자에게 보여주는 방식이다.

렌더링이 덜 된 부분은 놔두고 된 부분만 보여주므로, 사용자 입장에서는 매우 빠르게 로딩된다고 느낄 수 있으므로, 사용자 UX 증진에 한 몫 한다.