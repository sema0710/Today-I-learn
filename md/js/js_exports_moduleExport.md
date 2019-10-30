# export와 module.exports의 다른점

일단 결론부터 말하자면, module.exports 안에 exports가 있다고 말 할 수 있다.  
이런 결론이 나오게 된 과정을 기술하겠다. 
간단하다. module을 출력하면 안에 exports가 있다.
그리고 exports를 추가하면 그 안에 들어간다.

```
// function.js
exports.add = "test";

// main.js

const functions = require('./functions');
console.log(module);
```
이렇게 script를 출력해 보았는데 결과는,  
```
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: 'C:\\Users\\user\\Desktop\\jest_Study\\test.js',
  loaded: false,
  children:
   [ Module {
       id: 'C:\\Users\\user\\Desktop\\jest_Study\\function.js',
       exports: [Object],
       parent: [Circular],
       filename: 'C:\\Users\\user\\Desktop\\jest_Study\\function.js',
       loaded: true,
       children: [],
       paths: [Array] } ],
  paths:
   [ 'C:\\Users\\user\\Desktop\\jest_Study\\node_modules',
     'C:\\Users\\user\\Desktop\\node_modules',
     'C:\\Users\\user\\node_modules',
     'C:\\Users\\node_modules',
     'C:\\node_modules' ] }
```
가 나왔다. child 안의 exports 에 있는 것을 확인 할 수 있다.

```
// function.js
module.exports = "test";

// main.js

const functions = require('./functions');
console.log(module);
```
를 출력하면, 
```
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: 'C:\\Users\\user\\Desktop\\jest_Study\\test.js',
  loaded: false,
  children:
   [ Module {
       id: 'C:\\Users\\user\\Desktop\\jest_Study\\function.js',
       exports: ["test"],
       parent: [Circular],
       filename: 'C:\\Users\\user\\Desktop\\jest_Study\\function.js',
       loaded: true,
       children: [],
       paths: [Array] } ],
  paths:
   [ 'C:\\Users\\user\\Desktop\\jest_Study\\node_modules',
     'C:\\Users\\user\\Desktop\\node_modules',
     'C:\\Users\\user\\node_modules',
     'C:\\Users\\node_modules',
     'C:\\node_modules' ] }
```
가 되었으므로, module.exports안에 exports가 있다.