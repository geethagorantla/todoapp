import React, { useState } from 'react';
import './App.css';
import { ITodo } from './types';
import { title } from 'process';

function App() {
  type todo = {
    id?:string,
    title:string,
    completed:false
  }
  const [todos,settodos]=useState<ITodo[]>([])
  const [todoItem,setTodoItem]=useState<todo>({
    id:"",
    title:"",
    completed:false
  })

  console.log(todoItem,"todoItem")

  const handleTodoItem=(e:React.ChangeEvent<HTMLInputElement>) : any=>{
    const {name,value}=e.target
    setTodoItem({...todoItem,[name]: value})
  }

  const handleaddTodoItem=()=>{
    console.log(todoItem,"todoItem")
    if(todoItem?.title !== ""){
    if(todoItem?.id){
      const findingandreplacingtitle=todos?.map((item)=>{
        return item?.id === todoItem?.id ? {...item,title:todoItem?.title} : item
      })
      console.log(findingandreplacingtitle,"findingandreplacingtitle")
        settodos(findingandreplacingtitle)
      setTodoItem({...todoItem,title:"",id:undefined})
    }
    else{
      const newTodoitem : todo={...todoItem,id:new Date().getTime().toString()}
      settodos([...todos,newTodoitem])
     setTodoItem({...todoItem,title:""})
    }
  }
  else{
    alert("Enter the Task")
  }

  }

  const handleEditButton=(id: string)=>{
  const findingeditableTitle : ITodo | undefined =todos?.find((item)=>{
    return item?.id === id
  })
  console.log(findingeditableTitle,"findingeditableTitle")
  if(findingeditableTitle){
    setTodoItem({
      title:findingeditableTitle?.title,
      completed:findingeditableTitle?.completed,
      id:findingeditableTitle?.id
    })
  }


  }

  return (
    <div className='todo'>
            <h1>TODO LIST ITEMS</h1>
            <div>
              <input value={todoItem?.title} name="title" onChange={handleTodoItem}style={{padding:"0.5em",margin:"0.6em"}}/>
              <button onClick={handleaddTodoItem} style={{padding:"0.6em 1em",backgroundColor:"deepskyblue",border:"deepskyblue",color:"white"}}>
                ADD ITEM</button>
            </div>
            <table>
              <thead>
              <tr>
             <th>TODO TITLE</th>
             <th>Status</th>
             <th>Edit</th>
             <th>Delete</th>
             </tr>
             </thead>
           <tbody>
             {
              todos?.map((item)=>(
                <tr key={item?.id}>
                  <td>{item.title}</td>
                  <td>{item?.completed ? "completed" : "Inprogress"}</td>
                  <td><button onClick={()=>item.id && handleEditButton(item?.id)}>Edit</button></td>
                  <td> <button>Delete</button></td>
                </tr>
              ))
             }
            </tbody>
            </table>
    </div>
  );
}

export default App;
