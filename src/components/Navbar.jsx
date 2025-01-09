import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {

  // const [color, setColor] = useState("#FFFFFF")

  const [isImageOne, setIsImageOne] = useState(true);

  const changeImage = () => {
    setIsImageOne(!isImageOne); // Toggle the state
    // setColor("#000000")
  };

  return (
    //  <div style={{backgroundColor : color}} >
      <nav className='flex bg-gray-300 p-3 justify-between drop-shadow-lg'>
          <div className='flex'> {/* This is logo and name section */}
            <Link to="/" className='flex'>
              <img src="./images/logo-3.png" alt="" className='h-10'/>
              <img src="./images/name-2.png" alt="" className='h-10' />
            </Link>
          </div>


          <div className='flex space-x-4 font-bold font-mono'> {/* This is buttons section */}
            <NavLink
              to="/favourites"
              className=' text-black p-3 rounded-xl hover:text-blue-600 hover:underline'
            >
              Favourites
            </NavLink>
            <NavLink
              to="/addrizz"
              className=' text-black p-3 rounded-xl hover:text-blue-600 hover:underline'
            >
              Add Your Rizz
            </NavLink>
            <NavLink
              to="/features"
              className=' text-black p-3 rounded-xl hover:text-blue-600 hover:underline'
            >
              Features
            </NavLink>
            <NavLink
              to="/contacts"
              className=' text-black p-3 rounded-xl hover:text-blue-600 hover:underline'
            >
              Contacts
            </NavLink>
            <img
              src={isImageOne ? "./images/lite-mode.png" : "./images/dark-mode.png"}
              onClick={changeImage}
              className='hover:cursor-pointer h-10'
            />
          </div>
      </nav>
    // </div>
  )
}
