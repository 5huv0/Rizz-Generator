import React from 'react'
import {Link} from 'react-router-dom'

export default function Contacts() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>

      <div className='bg-green-500 w-9/12 p-20 flex justify-center'> {/* This is text head part*/}
        <p className='font-extrabold text-7xl flex font-serif'>
          Connect with me Here
        </p>
      </div>

      <div className='bg-green-500 w-9/12 p-10 flex justify-center gap-5 '> {/* This is linkings part*/}
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

    </div>
  )
}
