import React, { useState } from 'react'
import Desc from './Desc';

const Body = () => {
    const [task,setTask]=useState("");
    const [desc,setDesc]=useState("");
    const [work,setWork]=useState([]);

    const [totalChecked, setTotalChecked] = useState(0);

    const incrementCheckedCount = () => {
      setTotalChecked(prevCount => prevCount + 1);
    };


    const handleSubmit=(e)=>{
        e.preventDefault();
        
        setTask("");
        setDesc("");
        setWork([...work,{task,desc}])
        console.log(work);

    }
    if(totalChecked===work.length && totalChecked!=0){
        alert("yayy,you have done all your task.")
    }
    
    let renderTask=<h1>No Task available</h1>
    if(work.length>0){
    renderTask=work.map((w)=>{

            return (
             w.task.length?<Desc a={w.task} b={w.desc} fun={incrementCheckedCount}/>:<></>
        )
    })
}
const handleClear=()=>{
    if(work.length!=0){

        alert("Do you want to delete your tasks?")
        setWork([]);
        setTotalChecked(0);
    }
    else {
        alert("No task available")

    }
}

  return (
   
   <>
   <div className='my-8 py-12 bg-orange-500 opacity-80'>
    <h1 className='text-center font-bold text-white'>To Do</h1>
    <div>
        <div className='flex justify-center'>

    <form onSubmit={handleSubmit} className='border-2 border-white w-6/12 p-4 '>
    <input type='text' placeholder='Task' className='w-1/2  mt-2 p-2' value={task} onChange={(e)=>{setTask(e.target.value)}} ></input>
    <input type='text' placeholder='Describe' className='w-3/4 my-2 p-2'  value={desc} onChange={(e)=>{setDesc(e.target.value)}}></input>
    <button className='w-24 h-9 ml-4 bg-black text-white rounded-md hover:bg-gray-800'> Add</button>
    </form> 
        </div>
    </div>
    
   </div>
   <button className='left-[25px] relative mb-5 text-white bg-black  px-3 py-1 rounded-sm' onClick={handleClear}>Clear</button><hr></hr>
   {/* <div>{totalChecked}</div> */}
    {renderTask}
   </>
  )
}

export default Body

