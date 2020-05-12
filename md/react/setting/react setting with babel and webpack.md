# react setting with babel and webpack

## 🤐서론🤐

이 글은 react를 접한지 1년 겨우 넘어가는 개발자 지망생의 글로, 틀린점이나 건의할 것이 있으시면 언제든지 댓글로 알려주시면 감사하겠습니다.

## ✋hi custom webpack!✋
우리가 처음 react를 접할 때, CRA(Create-React-App)으로 react 를 setting 하게 된다.
하지만, 언젠가는, custom webpack과 babel로 react를 설정해야 하는 일이 오게된다.
예를 들면 CRA가 쓰는 react 버전이나 webpack 버전이 나의 컴퓨터와 안맞는다거나..등등
그럴 때, 언젠가는 필요한 custom webpack을 알아보자

## 💪 webpack setting 💪
우선 프론트 엔드 개발자들이 싫어하는 것 중 하나인 webpack을 setting 해보자
```
npm install --save-dev webpack webpack-cli 
// 기본적인 webpack
npm install --save-dev html-webpack-plugin  mini-css-extract-plugin
// html과 css를 위한 plugins
```
그다음 webpack 설정 파일인 webpack.config.js를 작성하자
```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[hash]_bundle.js'
    },
    module: {
        rules: [
            {
                test:  /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
              // css 번들링을 위해 MiniCssExtractPlugin과 css-loader 사용
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
      	// html 파일을 번들링 하기 위한 plugin
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
      	// css 파일을 번들링 하기 위한 plugin
    ]
}
```

## 💪 babel setting 💪
```
npm install --save-dev @babel/core babel-loader @babel/preset-env
// 이 구문의 출처는 아래에 있다
```
출처: https://medium.com/@benjaminwoojang/webpack-4%EC%99%80-babel-7%EC%9C%BC%EB%A1%9C-react%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EC%85%8B%EC%97%85%ED%95%98%EA%B8%B0-340e00d2760b

이제 바벨의 설정 파일이라고 할 수 있는 .babelrc를 만들어보자
```.babelrc
{
    "presets": [
        "@babel/env",
        // es6 -> es5
        "@babel/react"
        // jsx -> js
    ]
}
```

그리고 webpack에서 babel이 실행되어야 하니, webpack에 babel을 실행하게 추가해주자.
```js
// webpack.config.js
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[hash]_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test:  /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ]
}
```

이정도면 babel 설정까지 끝이 났다.


## 💪 react setting 💪
이제 react test server 까지 띄울 수 있도록 해보자.
```npm
npm install webpack-dev-server react react-dom
// webpack-dev-server는 CRA에서 npm start하면 localhost에서 실행되게 하는 놈이다.
```
자 이제 
```json
// package.json
"scripts": {
  "start": "webpack-dev-server --mode development --open --hot",
  "build": "webpack --mode production"
}
```
이렇게 설정해주면, 우리가 CRA에서 npm start와 npm run-script build 할때와 똑같이 된다
npm start를 하면 dev-server가 실행되며, npm run-script build는 webpack이 js와 html, css 파일들을 번들링한다.

## 🙆‍결론🙆‍♂
개인적으로 react를 사용하면서 불편했던 점이 한둘이 아니였다.
react 외주 진행시에 그전에 진행하던 사람과의 CRA 버전이 달라서 나는 webpack이나 react 문제라던가, 어쨌든 그때는 해결법을 몰랐지만 이제는 근본 싹을 잘라내는 법을 알았으니 되었다.
이걸로 글을 마친다. 긴 글 읽느라 수고했다.