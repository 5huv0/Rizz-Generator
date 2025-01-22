import React from 'react'


export default function RizzGen() {
  return (
    <div className='bg-blue-500'>

      <div className=' p-16 flex justify-center items-center'>
        <p className='text-4xl font-extrabold font-mono text-white'>
          You can Generate Free Cheezy pick up Lines Here !!!!!!
        </p>
      </div>
      
      <div  className="dropdown flex justify-center items-center p-5 m-5">
        <button  className="btn btn-secondary dropdown-toggle p-6 font-mono" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Choose Your Language
        </button>
        <ul  className="dropdown-menu">
          <li><a  className="dropdown-item font-mono" href="#">Bangla</a></li>
          <li><a  className="dropdown-item font-mono" href="#">Urdu</a></li>
          <li><a  className="dropdown-item font-mono" href="#">English</a></li>
          <li><a  className="dropdown-item font-mono" href="#">Spanish</a></li>
        </ul>
      </div>

      <div className='text-xl font-serif flex justify-center items-center flex-col p-4 '>
        <p className='text-2xl font-bold font-mono text-white border-4 p-5'>
          Aren't you worried about global warming? Because you're making it hot in here.
        </p>
        <button className='bg-emerald-300 font-bold p-3 rounded-xl flex justify-center items-center m-5'>
          Another One <img src="./images/loop-logo.png" alt="" className='size-5'/>
        </button>
      </div>
    </div>
  )
}
