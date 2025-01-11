import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-slate-500 w-full h-32 fixed bottom-0 flex justify-around'>
      <div>
        <p className='font-bold font-mono text-black text-4xl p-3'>
            Be Cheezy
        </p>
      </div>
      <div>
        <div className='flex  space-x-4 font-bold font-mono'> {/* This is buttons section */}
            <NavLink
                to="/rizzgen"
                className=' text-black p-3 rounded-xl hover:text-blue-600 hover:underline'
                >
                Create Rizz
                </NavLink>
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
            </div>
      </div>
    </div>
  )
}
