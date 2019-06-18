# createElement
> const p1 = document.createElement('p');
이렇게 하면 p 태그가 만들어 진다. 하지만 삽입은 되지 않은 상태가 된다. 또 한, 아무런 값도 넣지 않았다.

p1.textContent = "hello dom";
이제 값을 넣어줬다.

적용시키는 방법에는 2가지 방법이 있다.

const parent = document.getElementById('content');
들어갈 tag를 찾는다.

const firstChild = parent.childNodes[0];
들어갈 tag 안에 자식들 중 가장 첫번째를 찾는다.

parent.insertBefore(p1,firstChild);
이 코드는 들어갈 위치까지 정해 줄 수 있다. 이것은 첫번째 요소 앞에 넣으니 맨 앞에 넣는게 된다.

parent.appendChild(p1);
이 코드는 맨 마지막에 넣는다.(appendchild는 무조건 맨 마지막에 넣는다.)

이렇게 되면 parent 안에 있는 content라는 tag안에 p1안의 p태그를 넣었다.
