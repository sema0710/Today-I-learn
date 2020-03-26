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



## webpack 겉 핥기

webpack은 <strong>webpack.config.js</strong> 라는 파일에서 관리 할 수 있다.

이 파일에서 어떤 파일을 번들링 하고 번들링 후에는 어떤 곳에 저장하고,

js이외의 파일은 어떻게 번들링 하는지에 대해서 적는 파일이다.

이 파일을 작성하는 방법에 대해서 알아보자

1. entry

   우선 entry라는 부분이 있다

   ```js
   module.exports = {
       entry: "./src/index.js",
   }
   ```

   이 부분에서 entry는 어떤 파일을 번들링 할 것인지를  지정한다. 여러 파일을 번들링 하기 위해서는 이렇게 작성한다.

   ```js
   module.exports = {
   	entry: {
   		index: "file위치",
   		other: "file위치",
   	}
   }
   ```

   

2. output

   output은 이 번들링한 파일을 어떤 폴더에 저장하고 이름은 무엇으로 할 것인가를 정한다.

   ```js
   const path = require('path');
   module.exports = {
   	output: {
   		path: path.resolve(__dirname, "dist"),
           filename: "[name]_bundler.js",
   	},
   }
   ```

   여기서 path는 이름과 같이 파일을 생성할 폴더를 지정한다. 나는 path library를 사용해서 경로를 바로 위 경로에

   dist라는 파일을 만들었다. path는 node.js 기본 library이다.

   그리고 filename을 지정하였는데, 저렇게 이름을 지정하면, 위에서 여러 파일을 번들링 하게 되면, 

   index.bundler.js 와 other.bundler.js 로 번들링 된다. entry 파일의 이름에 따라서 변경된다고 하면 된다.

   그냥 정적인 이름을 사용해도 된다.

   

3. module

   loader의 등장이다.

   webpack이 왜 다른 library에 비해서 많이 사용되는지 알 수 있는 부분이다.

   이 loader라는 것은, js 말고 다른 자원들을 번들링 할 수 있게 해준다.

   ```js
   module.exports = {
   	module: {
           rules: [
               {
                   test:/\.css$/,
                   use: [
                       "style-loader",
                       "css-loader",
                   ]
               }
           ]
       }
   }
   ```

   

   여기서, module로 감싸고, rule이라는 배열을 선언해서 그 안에 file마다 어떤 loader로 load 할껀지 지정할 수 있다.

   test에서 파일의 확장자를 정규표현식으로 지정하고, use에서 사용할 loader를 문자열로 지정한다.

   여기서 사용한 style-loader와 css-loader는 npm으로 install 하고 사용하자.

   

4. plugins

   웹팩이 강력한 이유 2번째라고 할 수 있는 plugin에 대해서 설명해 주겠다.

   loader가 실행 된 후 이후에 실행되는 것이다.

   loader보다 훨씬 자유로운 대신에 사용 방법이 모두 다르다.

   ```js
   import HtmlWebpackPlugin from 'html-webpack-plugin'
   
   module.exports = {
   	plugins: [
           new HtmlWebpackPlugin()
       ]
   }
   ```

   이 코드를 보면 HtmlWebpackPlugin이라는 것이 있다.

   이 코드는 js를 끌어오지 않아도 html에 js를 자동으로 script처리 해서 넣어준다.

   그리고 번들링하는 plugin이다.



## 끝

