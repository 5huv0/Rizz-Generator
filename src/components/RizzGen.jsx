import React from 'react'


export default function RizzGen() {
  return (
    <div>

      <div className='bg-slate-500 h-36'>
        <p className='text-xl font-serif text-white'>
          You can Generate Free Cheezy pick up Lines Here !!!!!!
        </p>
      </div>
      
      <div  className="dropdown">
        <button  className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Choose Your Language
        </button>
        <ul  className="dropdown-menu ">
          <li><a  className="dropdown-item" href="#">Bangla</a></li>
          <li><a  className="dropdown-item" href="#">Urdu</a></li>
          <li><a  className="dropdown-item" href="#">English</a></li>
          <li><a  className="dropdown-item" href="#">Spanish</a></li>
        </ul>
      </div>

      <div className='bg-amber-600 text-xl font-serif'>
        <p>Aren't you worried about global warming? Because you're making it hot in here.</p>
        <button className='bg-emerald-300 font-bold p-3 rounded-xl'>
          Another One +
        </button>
      </div>
    </div>
  )
}
