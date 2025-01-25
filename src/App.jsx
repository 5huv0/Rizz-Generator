import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import RizzGen from './components/RizzGen'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
      
    </>
  )
}

export default App
