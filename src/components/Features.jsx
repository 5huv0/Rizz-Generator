import React from 'react'
import { Link } from 'react-router-dom'

export default function Features() {
  return (
    <div>
      <div className='bg-blue-500 flex justify-center items-center flex-col p-24  gap-10'> {/* div section 1 */}
        <p className='font-mono text-5xl text-white'>
          Rizz Generator & Features
        </p>
        <p className='font-mono text-3xl text-white'>
          Everything you need to flirt
        </p>
        <div className='button-div flex gap-4'>
          <Link to="#" >
            <button className=' text-black rounded-xl bg-white hover:!text-red-600 p-3 m-2'>
              Try Now
            </button>
          </Link>
          <Link to="/contacts" >
            <button className=' text-black rounded-xl bg-white hover:!text-red-600 p-3 m-2'>
              Contact Us
            </button>
          </Link>
        </div>
      </div> 

      <div> {/* div section 2 */}
        <p className='font-mono font-extrabold text-5xl flex justify-center align-middle'>
          Features
        </p>
    </div>
    </div>
  )
}
