import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    list:[],
    value:"",
    id:0,
  }

  onClickHandler = (e)=>{
    let text = document.getElementById("input").value;
    if(text == ""){
      alert("plz write what to do");
      return;
    }
    this.setState(
      {value:text,
      list : this.state.list.concat({id:this.state.id++,text:text,checked:false})
      });
  }

  onDeleteHandler = (e)=>{
    let where = document.querySelectorAll('div');
    where.forEach((a)=>{
      if(a.id == e.target.id){
        document.getElementById(a.remove());
      }
    })
  }

  onDivClicked = (e)=>{
    let where = document.querySelectorAll('div');
    console.log(e.target);
    where.forEach((a)=>{
      if(a.id == e.target.id && this.state.list[e.target.id].checked == false){
        a.style.opacity = "0.5"
        this.state.list[e.target.id].checked = true;
      }
      else if(a.id == e.target.id && this.state.list[e.target.id].checked == true){
        this.state.list[e.target.id].checked = false;
        a.style.opacity = "1.0"
      }
    })
  }
  render(){ 
    return (
      <main>
        <div>
          <input type="text" id="input"/>
          <button onClick={this.onClickHandler} >저장</button>
        </div>
        <div id="test">
          <ul>
          {
            this.state.list.map((comp,i)=>( 
              <div id={comp.id} onClick={this.onDivClicked} key={i}>
                <li id={comp.id}>{comp.text}</li>
                <button onClick={this.onDeleteHandler} id={comp.id}>X</button>
              </div>
              ))
          }
          </ul>
        </div>
      </main>
    );
  }
}

export default App;
