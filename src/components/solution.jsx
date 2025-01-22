import React, { useState } from 'react';

// Import language data files (as JSX)
import banglaRizz from './data/bangla';  // Bangla Rizz file
import urduRizz from './data/urdu';      // Urdu Rizz file
import englishRizz from './data/english';// English Rizz file
import spanishRizz from './data/spanish';// Spanish Rizz file

export default function RizzGen() {
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [currentRizz, setCurrentRizz] = useState('');

  // Map the selected language to the correct rizz data
  const rizzData = {
    english: englishRizz,
    bangla: banglaRizz,
    urdu: urduRizz,
    spanish: spanishRizz
  };

  // Function to generate random rizz
  const generateRandomRizz = () => {
    const selectedRizzData = rizzData[selectedLanguage];
    const randomIndex = Math.floor(Math.random() * selectedRizzData.length);
    setCurrentRizz(selectedRizzData[randomIndex].rizz);
  };

  // Handle language change
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    generateRandomRizz();  // Generate a random rizz line when language changes
  };

  return (
    <div className='bg-blue-500'>
      <div className='p-16 flex justify-center items-center'>
        <p className='text-4xl font-extrabold font-mono text-white'>
          You can Generate Free Cheezy Pick Up Lines Here!
        </p>
      </div>
      
      {/* Language Selector */}
      <div className="dropdown flex justify-center items-center p-5 m-5">
        <button className="btn btn-secondary dropdown-toggle p-6 font-mono" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Choose Your Language
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item font-mono" href="#" onClick={() => handleLanguageChange('bangla')}>Bangla</a></li>
          <li><a className="dropdown-item font-mono" href="#" onClick={() => handleLanguageChange('urdu')}>Urdu</a></li>
          <li><a className="dropdown-item font-mono" href="#" onClick={() => handleLanguageChange('english')}>English</a></li>
          <li><a className="dropdown-item font-mono" href="#" onClick={() => handleLanguageChange('spanish')}>Spanish</a></li>
        </ul>
      </div>

      {/* Display the current rizz line */}
      <div className='text-xl font-serif flex justify-center items-center flex-col p-4'>
        <p className='text-2xl font-bold font-mono text-white border-4 p-5'>
          {currentRizz || "Click 'Another One' to generate a rizz line!"}
        </p>
        <button className='bg-emerald-300 font-bold p-3 rounded-xl flex justify-center items-center m-5' onClick={generateRandomRizz}>
          Another One <img src="./images/loop-logo.png" alt="" className='size-5'/>
        </button>
      </div>
    </div>
  );
}
