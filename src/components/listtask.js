import React from 'react'

const Listtask = ({task,index,removetask}) => {
  return (
    <div>
        <div className='listtask'>
           {task.title}
            <button className="delete" onClick={()=>{removetask(index)}}>Delete</button>
        </div>
    </div>

  )
}

export default Listtask;