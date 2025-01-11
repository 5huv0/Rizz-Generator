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
      <Navbar/>
      <Outlet/>
      <div className='font-mono'>
        About this Site :
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum, veniam dolorem omnis aut enim cupiditate quod, quaerat eum animi tenetur numquam in maiores accusamus ducimus hic quae est ut libero! Maxime cum quidem corrupti at, repellendus non culpa laborum, reprehenderit iusto blanditiis repudiandae ipsum earum? Fugit debitis saepe, quidem quo consequuntur asperiores maiores dolores autem ipsum, soluta explicabo praesentium necessitatibus animi natus deleniti. Nemo molestias quos sequi dolores voluptatem obcaecati culpa tempore nulla. Labore, temporibus quasi. Laudantium quo, nemo nobis vero culpa esse dolorum nihil aspernatur harum obcaecati, inventore eum illum veritatis blanditiis nostrum deserunt sed ducimus repellendus, amet quia exercitationem dicta neque porro debitis! Expedita harum nulla, eos consectetur cumque veniam incidunt! Aperiam vero, debitis at culpa magnam veritatis quod placeat necessitatibus facere! Labore repellendus maiores adipisci iusto distinctio neque corrupti ab illo. Nemo, perferendis voluptatibus adipisci, saepe hic sit earum perspiciatis quia aperiam ea cum veniam error ducimus sequi dolor temporibus id provident. Non, ab maiores. Esse nulla odit magni asperiores blanditiis eaque non, similique, aut est voluptas ab alias minima maiores dignissimos magnam? Commodi laudantium sint optio reprehenderit quia expedita eos, dolores labore praesentium voluptates quas ad similique, ipsam amet minima totam nobis reiciendis tenetur? Quisquam.
      </div>
      <Footer/>
    </>
  )
}

export default App
