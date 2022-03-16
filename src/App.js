import React from 'react';
import './App.css';
import {useState} from 'react'
function App() {
  const [todos,settodos] = useState([])
  const [todo,settodo]= useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>settodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>settodos([...todos,{id:Date.now(), text:todo,status:false}])}className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          todos.map((obj)=>{
        return(<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              settodos(todos.filter(obj2=>{
                if(obj2.id===obj.id)
                {
                  obj2.status=e.target.checked
                }
                return obj2
              }))
            }}value={obj.status}type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>)
        })}
        {
          todos.map((obj)=>{
            if(obj.status)
            {
              return(<h1>{obj.text}</h1>)
            }
          })
        }
      </div>
          
    </div>
  );
}

export default App;