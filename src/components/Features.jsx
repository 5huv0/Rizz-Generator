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

      <div className='p-5'> {/* div section 2 */}

        <p className='font-mono font-extrabold text-5xl flex justify-center align-middle'>
          Features
        </p>


        <div className='grid grid-cols-3 gap-4 m-7'>
          <div className="card text-center w-72" >
            <div className="card-body m-5">
              <img src="./images/calendar-logo.png" alt="" className='size-9' />
              <p className="card-text">Make Schedule with your partner and let us know.</p>
              <button className="bg-blue-500 rounded-xl p-2 hover:text-white">Learn More</button>
            </div>
          </div>

          <div className="card text-center w-72" >
            <div className="card-body m-5">
              <img src="./images/fav-logo.png" alt="" className='size-9'/>
              <p className="card-text">You can favourite your rizz lines by making an account.</p>
              <button className="bg-blue-500  rounded-xl p-2 hover:text-white">Learn More</button>
            </div>
          </div>
          

          <div className="card text-center w-72" >
            <div className="card-body m-5">
              <img src="./images/publish-logo.png" alt="" className='size-9'/>
              <p className="card-text">You can Publish your rizz line and save it to our database.</p>
              <button className="bg-blue-500  rounded-xl p-2 hover:text-white">Learn More</button>
            </div>
          </div>

          <div className="card text-center w-72" >
            <div className="card-body m-5">
              <img src="./images/pushpin-logo.png" alt="" className='size-9'/>
              <p className="card-text">You can Pin your favourite rizz line and use it anyday.</p>
              <button className="bg-blue-500  rounded-xl p-2 hover:text-white">Learn More</button>
            </div>
          </div>

          <div className="card text-center w-72" >
            <div className="card-body m-5">
              <img src="./images/mobile-logo.png" alt="" className='size-9'/>
              <p className="card-text">We provide the Downloading option of your rizz lines.</p>
              <button className="bg-blue-500  rounded-xl p-2 hover:text-white">Learn More</button>
            </div>
          </div>

          <div className="card text-center w-72" >
            <div className="card-body m-5">
              <img src="./images/upload-logo.png" alt="" className='size-9'/>
              <p className="card-text">We provide the Uploading option of your rizz lines.</p>
              <button className="bg-blue-500  rounded-xl p-2 hover:text-white">Learn More</button>
            </div>
          </div>

          <div className="card text-center w-72" >
            <div className="card-body m-5">
              <img src="./images/non18-logo.png" alt="" className='size-9'/>
              <p className="card-text">We don not support any kind of 18+ lines in our site.</p>
              <button className="bg-blue-500  rounded-xl p-2 hover:text-white">Learn More</button>
            </div>
          </div>

          <div className="card text-center w-72" >
            <div className="card-body m-5">
              <img src="./images/non18-logo.png" alt="" className='size-9'/>
              <p className="card-text">We don not support any kind of 18+ lines in our site.</p>
              <button className="bg-blue-500  rounded-xl p-2 hover:text-white">Learn More</button>
            </div>
          </div>

          <div className="card text-center w-72" >
            <div className="card-body m-5">
              <img src="./images/chat-logo.png" alt="" className='size-9'/>
              <p className="card-text">Now you can connect with others and talk anonymously.</p>
              <button className="bg-blue-500  rounded-xl p-2 hover:text-white">Learn More</button>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}
