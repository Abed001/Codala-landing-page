import React from 'react'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Navbar from "./Components/Navbar"
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div className=' px-5 lg:px-0  py-10'>
      <BrowserRouter>
       {/* <Navbar />*/}
        <Home />
        <About />
        <Services />
      </BrowserRouter>
    </div>
  )
}

export default App
