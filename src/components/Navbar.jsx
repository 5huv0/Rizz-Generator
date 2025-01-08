import React, { useState } from 'react'

export default function Navbar() {

  const [isImageOne, setIsImageOne] = useState(true);

  const changeImage = () => {
    setIsImageOne(!isImageOne); // Toggle the state
  };

  return (
      <nav className='flex bg-blue-300 p-3 justify-between'>

        <div className='flex '> {/* This is logo and name section */}
          <img src="./src/images/logo-3.png" alt="" className='h-10'/>
          <img src="./src/images/name-2.png" alt="" className='h-10' />
        </div>

        <div className='flex space-x-4'> {/* This is buttons section */}
          <button className='bg-blue-900 text-white p-3 rounded-xl hover:bg-blue-600'>
            Favourites
          </button>
          <button className='bg-blue-900 text-white p-3 rounded-xl hover:bg-blue-600'>
            Add New Rizz
          </button>
          <button className='bg-blue-900 text-white p-3 rounded-xl hover:bg-blue-600'>
            Connect with me 
          </button>
         


          <img
            src={isImageOne ? "./src/images/lite-mode.png" : "./src/images/dark-mode.png"}
            onClick={changeImage}
            className='hover:cursor-pointer'
          />
        
          
        </div>

      </nav>
  )
}
