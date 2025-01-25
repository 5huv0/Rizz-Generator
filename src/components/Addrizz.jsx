import React from 'react'

export default function Addrizz() {
  return (
    <div>
      <p className='flex justify-center items-center text-5xl font-mono font-extrabold m-7'>
        Add Your Rizz Here <img src="./images/wink-logo.png" alt="" className='size-11'/>
      </p>
      <div className='flex flex-col justify-center items-center m-10'>
        <label htmlFor="" className='flex justify-center items-center text-2xl font-mono font-bold'>
          Write Here !!!
        </label>
        <input type="text" className='box-border border-3 border-gray-500 h-40 w-96 p-5'/>
        <button className='bg-blue-600 rounded-xl p-4 text-white font-mono font-bold flex justify-center items-center m-5 gap-3'>
          Add New <img src="./images/plus-circle-logo.png" alt="" className='size-6'/>
        </button> 
      </div>
      
    </div>
  )
}
