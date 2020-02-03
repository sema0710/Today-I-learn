# webpack이 나오게 된 이유

## 초기의 module

초기에는 js 파일을 분할 했을 경우 html에서 script로 끌어와서 html 파일 내에서 import 해야 했다.

하지만 node.js에서는 require가 모듈을 만들고 끌어 올 수 있게 되었다.

ES6가 공식으로 채택되고 나서는 import , export 가 공식이 되어서, 널리 사용되었다.

하지만 node 상에서는 돌아가지 않는 단점이 있었다.

## webpack의 등장

webpack은 분할된 module들을 실행시키기 전에, 한가지 파일로 번들링 시켜주는 라이브러리이다.(?)

webpack이 등장함으로써, 브라우저 상에서는 돌아가지 않았던 require와 import를 webpack으로 

미리 파일을 합쳐 줌으로써,  브라우저에서도 script로 모든 js파일을 다운받지 않고, 사용할 수 있게 되었다.

