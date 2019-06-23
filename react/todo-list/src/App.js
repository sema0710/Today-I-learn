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
    this.setState(
      {value:text,
      list : this.state.list.concat({id:this.state.id++,text:text,checked:false})
      });
      console.log(this.state.list);
  }
  onDeleteHandler = (e)=>{
    console.log(e.target.id);
    let where = document.querySelector('li');
    where.forEach =()=>{
      
    }
    console.log(where);
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
            this.state.list.map((comp,i)=>{
              return ( 
              <div>
                <li id={comp.id}>{comp.text}</li>
                <button onClick={this.onDeleteHandler} id={comp.id}>✔</button>
              </div>
              )
            })
          }
          </ul>
        </div>
      </main>
    );
  }
}

export default App;
