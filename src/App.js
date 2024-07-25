import { useState } from 'react';
import './App.css';

function App() {
const [todos,setTodos]=useState([])
console.log(todos,"todos")
const initialState={
  id:"",
  title:"",
  completed:false
}
const [todoItem,setTodoItem]=useState(initialState)

console.log(todoItem,"todoItem")

const handleTodoItem=(e)=>{
  const {name,value}=e.target
  setTodoItem({...todoItem,[name]:value})
}

const handleADDTodoItem=()=>{
  if(todoItem?.title !==""){
 if(todoItem?.id){
  const findingdata=todos?.map((item)=>{
    return item?.id === todoItem?.id ? {...item,title:todoItem?.title} : item
  })
  setTodos(findingdata)
 }
 else{
  const newTodoItemadding={...todoItem,id:new Date()?.getTime()?.toString(),completed:false}
  setTodos([...todos,newTodoItemadding])
  setTodoItem(initialState)
 }
}
else{
  alert("Please Enter the Title")
}
}

const handleEditButton=(id)=>{
  if(id){
    const findingtheId=todos?.find((item)=>{
      return item?.id === id && item
    })
    setTodoItem(findingtheId)
    
  }

}

  return (
    <div className='todo__main'>
      <div>
        <input className='todo_input' value={todoItem?.title} onChange={handleTodoItem} name="title"/>
        <button className='todo_button' onClick={handleADDTodoItem}>ADD ITEM</button>
      </div>
      <div className='table_todo'>
        <table>
        <tr>
    <th>Title</th>
    <th>Status</th> 
    <th>Edit</th>
    <th>Delete</th>
  </tr>
  {
    todos?.map((item)=>{
      return <tr>
       <td>{item?.title}</td>
       <td>{item?.status ? "completed" : "Inprogress"}</td>
       <td><button onClick={()=>handleEditButton(item?.id)}>Edit</button></td>
       <td><button>Delete</button></td>
      </tr>
    })
  }
 
        </table>
      </div>
     
    </div>
  );
}

export default App;
