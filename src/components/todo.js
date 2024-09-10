import React, { useState } from "react";
import './todo.css'
import Addtask from "./addtask";
import Listtask from "./listtask";

const Todo = () => {
    const[tasks,settask]=useState([
      
    ]);
    const addtask=(title)=>{
        const newtask=[...tasks,{title}]
    settask(newtask);

    };
    const removetask=(index)=>{
        const newtask=[...tasks]
        newtask.splice(index,1)
        settask(newtask)
    }
  return (
    <>
    <div className="todo-main">
      <div className="header">TODO APP</div>
      <div className="todo-task"  ><Addtask addtask={addtask}/>  </div>
      <div className="tasks1">{tasks.map((task,index)=>(
        <Listtask  task={task} removetask={removetask} index={index} key={index}/>  

      ))}</div>
      </div>
    </>
  );
};

export default Todo;
