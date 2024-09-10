import React, { useState } from 'react'

const Addtask = ({addtask}) => {
    const[value,setvalue]=useState("");
    const additem=()=>{
        addtask(value);
        setvalue("")
    };

 
  return (
    <>
        <div className='input-main'>
            <input type="text" placeholder="Add New Task
            ..."value={value} className="input" onChange={(e)=>{setvalue(e.target.value)}}></input>
            <button onClick={additem} className="add">Add Task</button>
        </div>
    </>
  )
}

export default Addtask