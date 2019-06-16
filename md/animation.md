# animation in css
css in animation

## animation 기초
    css에는 animation이라는 속성이 있다.  
    animation 하위 속성에는 이런 것들이 있다.  
* animation-delay  
    엘리먼트가 로드되고 나서 언제 애니메이션이 시작될지 지정합니다.  

* animation-direction  
    애니메이션이 종료되고 다시 처음부터 시작할지 역방향으로 진행할지 지정합니다.  

* animation-duration
    한 싸이클의 애니메이션이 얼마에 걸쳐 일어날지 지정합니다.    

* animation-iteration-count    
    애니메이션이 몇 번 반복될지 지정합니다. infinite로 지정하여 무한히 반복할 수 있습니다.  

* animation-name  
    이 애니메이션의 중간 상태를 지정합니다. 중간 상태는  @keyframes 규칙을 이용하여 기술합니다.  

* animation-play-state  
    애니메이션을 멈추거나 다시 시작할 수 있습니다.  

* animation-timing-function  
    중간 상태들의 전환을 어떤 시간간격으로 진행할지 지정합니다.  

* animation-fill-mode  
    애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정합니다  

>p {  
  animation-duration: 3s;//3초에 걸쳐서 애니메이션  
  animation-name: slidein;  //애니메이션을 하는데 이름이 뭐냐
}  
@keyframes slidein {  //여기서 애니메이션의 행동을 조정
  from {  //시작
    margin-left: 100%;  
    width: 300%  
  }  
  75%{
      margin-left:20%;
      width:100%;
  }
  to {  //끝
    margin-left: 0%;  
    width: 100%;  
  }  
}  