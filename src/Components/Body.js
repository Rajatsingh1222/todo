import React, { useState } from 'react'

const Body = () => {
    const [task,setTask]=useState("");
    const [desc,setDesc]=useState("");
    const [work,setWork]=useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        setTask("");
        setDesc("");
        setWork([...work,{task,desc}])
        console.log(work);

    }
    let renderTask=<h1>No Task available</h1>
    if(work.length>0){
    renderTask=work.map((w)=>{

            return (
                <div className='bg-red-400 text-white my-2 w-8/12 flex justify-between text-3xl pl-4 pr-8 py-3'>
                <h2>{w.task}</h2>
                <h2>{w.desc}</h2>
            </div>
        )
    })
}

  return (
   
   <>
   <div className='mt-12 py-12 bg-orange-500 opacity-80'>
    <h1 className='text-center font-bold text-white'>To Do</h1>
    <div>
        <div className='flex justify-center'>

    <form onSubmit={handleSubmit} className='border-2 border-white w-6/12 p-4 '>
    <input type='text' placeholder='Task' className='w-1/2  mt-2 p-2' value={task} onChange={(e)=>{setTask(e.target.value)}} ></input>
    <input type='text' placeholder='Describe' className='w-3/4 my-2 p-2'  value={desc} onChange={(e)=>{setDesc(e.target.value)}}></input>
    <button className='w-24 h-9 ml-4 bg-black text-white rounded-md'> Add</button>
    </form> 
        </div>
    </div>
    
   </div>
    {/* {work.length>0?<div>task</div>:<></>} */}
    {renderTask}
   </>
  )
}

export default Body

