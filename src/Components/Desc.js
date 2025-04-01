import React, { useState } from 'react'

const Desc = ({a,b,fun}) => {
   
    const [show,setShow]=useState(false);
    const [icon,setIcon]=useState("⬇");
    const [box,setBox]=useState("☑️");
    const [color,setColor]=useState("gray");

    const handleShow=()=>{
        show?setIcon("⬇"):setIcon("⬆")
        setShow(!show)
    }
    const handleBox=()=>{
      if(color=="gray"){
     
        alert("Make sure you have done this task!")
        setBox("✅")
        setColor("green");
        fun();
      }
    }
  return (
  <div className=' m-3 w-8/12  text-3xl pl-2 pr-8 py-1'>
    <div className='flex justify-between bg-cyan-400 w-1/3 rounded-lg'>
     <div className=' text-white w-4/6 py-1 px-3 rounded-md'>{a}</div>
     <div className='pr-3 cursor-pointer left-12 relative text-orange-400 text-sm pt-3' onClick={handleShow}>{icon}</div>
     <div className='relative left-12 top-1 cursor-pointer' onClick={handleBox}>{box}</div>
    </div>
   { show && <div className= ' text-black border-l-2 border-b-2 border-orange-400 w-3/4 mt-0 rounded-sm px-3 pt-7 pb-9 text-lg'>{b}</div>}
</div>
  )
}

export default Desc