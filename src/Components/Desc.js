import React, { useState } from 'react'

const Desc = ({a,b}) => {
   
    const [show,setShow]=useState(false);
    const [icon,setIcon]=useState("⬇");

    const handleShow=()=>{
        show?setIcon("⬇"):setIcon("⬆")
        setShow(!show)
    }
  return (
    <div className=' m-2 w-8/12  text-3xl pl-2 pr-8 py-1'>
    <div className='flex justify-between bg-cyan-400 w-1/3 rounded-lg'><div className=' text-white w-4/6 py-1 px-3 rounded-md'>{a}</div><div className='pr-3 cursor-pointer text-orange-400 text-sm pt-3' onClick={handleShow}>{icon}</div></div>
   { show && <div className= ' text-black border-l-4 border-b-2 border-orange-400 w-3/4 mt-4 rounded-sm px-3 pt-6 pb-3 text-lg'>{b}</div>}
</div>
  )
}

export default Desc