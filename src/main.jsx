import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Features from './components/Features.jsx'
import Contacts from './components/Contacts.jsx'
import Favourites from './components/Favourites.jsx'
import Addrizz from './components/Addrizz.jsx'
import RizzGen from './components/RizzGen.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/rizzgen' element={<RizzGen/>}/>
      <Route path='/favourites' element={<Favourites/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/addrizz' element={<Addrizz/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
