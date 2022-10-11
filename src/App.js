
import './App.css';
import {useState} from 'react'

function App() {
  const[toDos,setToDos]=useState([]) //list
  const[toDo,setTodo]=useState('')  //for each letter //e is event //toDo will be passed as an object with value and state to set value for checkbox
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
      <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." /> 
      <i onClick={()=>setToDos([...toDos,{id:Date.now(),text: toDo, status:false}])} className="fas fa-plus"></i> 
      

    </div>
    <div className="todos">
      {
        toDos.map((obj)=>{
        return( <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.checked)
            setToDos(toDos.filter((obj2)=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
                
              }
              return obj2
            }))
          }} value={obj.status} type="checkbox" name="" id="" />
        
          <p>{obj.text}</p>
      
        </div>
        <div className="right">
          <i onClick={()=>{
            let temp=[]
            toDos.map((obj2)=>{
              if(obj2.id!==obj.id){
                temp.push(obj2)
              }
              return temp
            })
            setToDos([...temp])
          }} className="fas fa-times"></i>
        </div>
      </div>
     
     )
})}

    </div>
    <div>
      
    </div>

  </div>
  );
}

export default App;
