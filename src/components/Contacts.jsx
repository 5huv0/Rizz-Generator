import React from 'react'
import {Link} from 'react-router-dom'

export default function Contacts() {
  return (
    <div className='flex flex-col'>

      <div className='bg-green-500 w-9/12 p-10'>
        <p className='font-extrabold text-7xl flex'>
          Connect with me Here
        </p>
      </div>

      <div className='bg-green-500 w-9/12 p-10 '>
        <button>
            <Link
              to="https://github.com/5huv0"
            >
              <img src="/images/github-logo.png" alt="" />
            </Link>
          </button>
          <button>
            <Link
              to=""
            >
              <img src="/images/fb-logo.png" alt="" />
            </Link>
          </button>
          <button>
            <Link
              to=""
            >
              <img src="/images/insta-logo.png" alt="" />
            </Link>
          </button>
          <button>
            <Link
              to=""
            >
              <img src="/images/twitter-logo.png" alt="" />
            </Link>
          </button>
          <button>
            <Link
              to=""
            >
              <img src="/images/gmail-logo.png" alt="" />
            </Link>
          </button>
      </div>
    </div>
  )
}
