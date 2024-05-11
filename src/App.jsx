import React from 'react'
import Home from "./Pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Testimonials from './Pages/Testimonials'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Tech from './Pages/Tech'
import Team from './Pages/Team'
import Footer from './Components/Footer.jsx'

function App() {

  return (
    <div className='flex flex-col  py-10'>
      <BrowserRouter>
        <div className='px-5 lg:px-0 mb-60'> <Home /></div>
        <div className='px-5 lg:px-0 mt-80 lg:mt-[600px]'> <About /></div>
        <div className='mt-[30px] lg:mt-[100px]'><Services /></div>
        <div className='px-5 lg:px-0  lg:mt-20'> <Testimonials /></div>
        <div className='px-5 lg:px-0 mt-[-300px] lg:mt-[400px] mb-[1500px]'> <Tech /></div>
        <div className='px-5 lg:px-0 mt-[-1100px] lg:mt-[-1000px] mb-[500px]'> <Team /></div>
        <div className='px-5 lg:px-0 mb-10 lg:mb-0 mt-[700px] lg:mt-0'><Footer /></div>

      </BrowserRouter>
    </div>
  )
}

export default App
