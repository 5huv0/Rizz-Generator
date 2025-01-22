import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-slate-500 w-full bottom-0 left-0 right-0 flex justify-around'>
      <div className='flex flex-col items-start'>
        <p className='font-bold font-mono text-black text-4xl p-3'>
            Be Cheezy
        </p>
        <div className='flex '> {/* This is linkings part*/}
                <button className='hover:bg-green-200 rounded-full w-16 h-8 justify-center flex transition ease-in-out delay-100'>
                    <Link
                      to="https://github.com/5huv0"
                    >
                      <img src="/images/github-logo.png" alt="" />
                    </Link>
                </button>
                <button className='hover:bg-green-200 rounded-full w-16 h-8 justify-center flex transition ease-in-out delay-100'>
                    <Link
                      to="https://www.facebook.com/share/1DSDLmcNCB/"
                    >
                      <img src="/images/fb-logo.png" alt="" />
                    </Link>
                </button>
                <button className='hover:bg-green-200 rounded-full w-16 h-8 justify-center flex transition ease-in-out delay-100'>
                    <Link
                      to="https://www.instagram.com/5huv_0?igsh=ZDVuMm0wOTBtMnln"
                    >
                      <img src="/images/insta-logo.png" alt="" />
                    </Link>
                </button>
                <button className='hover:bg-green-200 rounded-full w-16 h-8 justify-center flex transition ease-in-out delay-100'>
                    <Link
                      to="https://x.com/MdShuvo76030551?t=EYDUmqMZbLgsENpAbjW4Kw&s=09"
                    >
                      <img src="/images/twitter-logo.png" alt="" />
                    </Link>
                </button>
                <button className='hover:bg-green-200 rounded-full w-16 h-8 justify-center flex transition ease-in-out delay-100'>
                    <Link
                      to="mailto: md88748874@gmail.com"
                    >
                      <img src="/images/gmail-logo.png" alt="" />
                    </Link>
                </button>
        </div>
        <p className='font-thin font-mono text-black text-xs p-3'>
            All Right Reserve @5huv0
        </p>
      </div>
      <div>
        <div className='flex flex-col font-bold font-mono p-3 m-2'> {/* This is buttons section */}
            <NavLink
                to="/rizzgen"
                className=' text-black  rounded-xl hover:underline'
                >
                Create Rizz
                </NavLink>
                <NavLink
                to="/favourites"
                className=' text-black  rounded-xl hover:underline'
                >
                Favourites
                </NavLink>
                <NavLink
                to="/addrizz"
                className=' text-black  rounded-xl hover:underline'
                >
                Add Your Rizz
                </NavLink>
                <NavLink
                to="/features"
                className=' text-black  rounded-xl hover:underline'
                >
                Features
                </NavLink>
                <NavLink
                to="/contacts"
                className=' text-black rounded-xl hover:underline'
                >
                Contacts
            </NavLink>
        </div>
      </div>
    </div>
  )
}
