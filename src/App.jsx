import React from 'react'
import Home from "./Pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Testimonials from './Pages/Testimonials'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Tech from './Pages/Tech'

function App() {

  return (
    <div className='flex flex-col px-5 lg:px-0 py-10'>
      <BrowserRouter>
        <div className='mb-60'> <Home /></div>
        <div className='mt-80 lg:mt-[600px]'> <About /></div>
        <div className='mt-[30px] lg:mt-[100px]'><Services /></div>
        <div className='mt-[1200px] lg:mt-80'> <Testimonials /></div>
        <div className='mt-[600px] lg:mt-[400px]'> <Tech /></div>






      </BrowserRouter>
    </div>
  )
}

export default App
