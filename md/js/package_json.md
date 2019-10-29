# what is package.json?

node.js 프로젝트를 관리하기 위한 파일로, 모듈의 버전을 관리하는 파일.  
npm 의존성 문제를 해결해준다고 한다.

기본적으로 생성되지 않으므로, ```npm init```으로 생성하자.  
이 코드를 쳐보면, 바로 생성되지 않는 것을 알 수 있다.  
추가 정보를 넣어야 하는데, 그 추가 정보에 대한 설명을 하겠다.  

1. name  
당신의 패키지에 name이 없으면 package.json file이 있어도, 
npm install을 하면, 다운되지 않는다. 틀린 package.json file이라 그렇다.  
name과 version은 필수다.  
그리고 name을 작성할 때, 지켜야 하는 규칙이 있다.

https://programmingsummaries.tistory.com/385 이곳을 확인하자.

2. version 
당신의 패키지의 버전이 뭔지를 적는 부분,  
만약에 이게 없으면 npm install을 하면 다운되지 않는다.  
name과 version은 필수다.  
version은 반드시 npm 디펜던시의 node - semver에 파싱 되게 작성해야 한다.

파싱이 어떤 형식을 지켜야 하는지는 이 페이지를 참고  
https://github.com/npm/node-semver

3. description  
말 그대로 설명을 string으로 기술하면 된다.  

4. ketwords  
키워드로 당신의 package를 설명하자.  

5. homepage  
만약에 project homepage가 있으면 여기에 기술하라.  

6. bugs  
버그를 찾으면 신고할 email을 기술할 것.  
```
"bugs": {
    "url": "http://github.com/owner/project/issues",
    "email": "project@hostname.com"
}
```
