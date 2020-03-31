# webpack tutorial

## webpack이란?

최신 front-end 에서 가장 많이 사용되는 모듈 번들러 입니다.

웹을 만들 때 사용되는 자원(css,html,js)등을 모듈로 보고, 이것들을 하나의 결과물을 내는 것입니다.

## 웹팩 설치하기

```
npm install webpack webpack-cli
```

이렇게 webpack 을 설치 할 수 있다.

## 웹팩의 기본

### entry

```js
module.exports = {
	entry: "번들링 할 js file 최상위 file",
}
```

entry는 번들링 할 파일을 지정하는 부분입니다.

그 파일을 번들링 할 경우 그 파일에서 사용하는 모든 파일들이 번들링 됩니다.

만약에 여러개를 번들링하고 싶으면, 

```js
module.exports = {
	entry: {
		index: "./src/index.js",
		test: "./src/test.js",
	}
}
```

이렇게 하면 됩니다.

### output

```js
const path = require('path');
module.exports = {
	output: {
		path: path.resolve(__dirname,'filename'),
         filename: "bundle file name",
	}
}
```

path에는 당신의 build 될 파일의 경로를 지정해 주는 부분입니다.

filename은 build될 파일의 이름을 지정해 줍니다.

만약 여러개로 파일을 나눠서 build 할 경우에는 [name]_sth.js로 해주시길 바랍니다.

### plugins

다른 모듈 번들러들을 제외하고 웹팩이 가장 뜨는 이유는, 다름아닌 plugin 들이 많아서 입니다.

그럼 이 plugin들을 사용하는 법을 알아봅시다.

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}
```

이렇게 plugin을 node.js로 다운받은 후에 이렇게 사용할 수 있습니다.

### mode

webpack에는 다양한 모드들이 있습니다

production, development 등등.. 모드에 따라서 제외된 기능들이 있습니다.

webpack 공식 홈페이지에서 확인하세요.

https://webpack.js.org/

```js
module.exports = {
  mode: 'production'
};
```

### module

이 개념은 webpack에서 가장 중요한 기능입니다.

css나 png같은 다른 파일들을 bundle 하는 기능으로, 이렇게 하면 됩니다.

각각 파일에 맞는 loader를 node에서 다운받아서 사용하세요.	

```js
module.exports = {
    	module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                    ]
                },
                {
                    test: /\.ttf$/,
                    use: [
                        'file-loader',
                    ]
                }
            ]
        },
}
```

