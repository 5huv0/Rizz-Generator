import React, { useState } from 'react';
import banglaRizz from './RizzDataBan';
import englishRizz from './RizzDataEng';
import hindiRizz from './RizzDataHin';
import spanishRizz from './RizzDataSpn';




export default function RizzGen() {
  const[selectedLang , setSelectedLang] = useState('english')
  const[currentRizz , setCurrentRizz] = useState('')

  const rizzData = {
    english : englishRizz,
    bangla : banglaRizz,
    hindi : hindiRizz,
    spanish : spanishRizz
  }

  const generateRandomRizz = () => {
    const selectRizzData = rizzData[selectedLang];
    const randNum = Math.floor(Math.random() * selectRizzData.length);
    setCurrentRizz(selectRizzData[randNum].rizz);
  }

  const langChng = (language) => {
    setSelectedLang(language);
    generateRandomRizz();
  }
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
          <li><a  className="dropdown-item font-mono" href="#" onClick={() => langChng('bangla')}>Bangla</a></li>
          <li><a  className="dropdown-item font-mono" href="#" onClick={() => langChng('hindi')}>Hindi</a></li>
          <li><a  className="dropdown-item font-mono" href="#" onClick={() => langChng('english')}>English</a></li>
          <li><a  className="dropdown-item font-mono" href="#" onClick={() => langChng('spanish')}>Spanish</a></li>
        </ul>
      </div>

      <div className='text-xl font-serif flex justify-center items-center flex-col p-4 '>
        <p className='text-2xl font-bold font-mono text-white border-4 p-5'>
          {currentRizz || "Click Generate one to Generate a Rizz Line!!!"}
        </p>
        <button className='bg-emerald-300 font-bold p-3 rounded-xl flex justify-center items-center m-5' onClick={generateRandomRizz} >
          Generate One <img src="./images/loop-logo.png" alt="" className='size-5'/>
        </button>
      </div>
    </div>
  )
}
