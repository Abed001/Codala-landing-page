import React from 'react'
import Navbar from '../Components/Navbar'
import LogoIpsumSvg from '../Components/svg/LogoIpsumSvg.jsx'
import { IoIosArrowForward } from "react-icons/io";
import loom from '../assets/loom.png'
import basecamp from '../assets/basecamp.png'
import maze from '../assets/maze.png'
import square from '../assets/square.png'
import framerimg from '../assets/framerimg.png'
import FirstElipse from '../Components/svg/FirstElipse.jsx'
import SecondElipse from '../Components/svg/SecondElipse.jsx'
import ThirdElipse from '../Components/svg/ThirdElipse.jsx'
import FourthElipse from '../Components/svg/FourthElipse.jsx'




export default function Home() {
  return (
    <div id='home'>
      <Navbar />
      <span className='z-20 absolute top-[-50px] right-0'><FirstElipse /></span>
      <span className='hidden-on-phone absolute top-[-200px] lg:right-0 '><SecondElipse /></span>
      <span className='hidden-on-phone absolute top-[-50px] right-60'><ThirdElipse /></span>
  <span className='hidden-on-phone absolute top-[-50px] right-80'> <FourthElipse /></span>

      <section className=' z-30 absolute top-10 right-0 mt-20 my-background w-[100%] flex flex-col justify-items-start'>
        <div className='mt-[-80px] lg:mt-[-40px] w-full flex flex-col text-center items-center'>
          <button className='mt-40 lg:w-[300px] font-semibold justify-around bg-lightpurple border-purple border-2 rounded-full px-2 lg:px-5 uppercase flex items-center text-[10px] lg:text-[14px] leading-10 '> <span className='mr-2'><LogoIpsumSvg /></span>introducing codala</button>
          <h1 className='max-w-[70%] tracking-tighter lg:tracking-[-5px] font-ClashDisplay font-semibold text-[25px] lg:text-[70px] mt-5 lg:mt-10'><span className='block'>Revolutionizing Creativity</span><span >Codala's Software Solutions</span></h1>
          <p className='max-w-[50%] font-Manrope text-[10px] lg:text-[20px] font-medium'>Team of experienced software developers dedicated to creating qualitative solutions</p>
          <div className='flex mt-5 lg:mt-10 justify-items-center]'>
            <button className=' flex  font-bold text-white bg-purple rounded-full px-2 lg:px-5 uppercase items-center justify-center text-[10px] lg:text-[16px] leading-10'>contact us <span className='pl-2'><IoIosArrowForward strokeWidth={20} /></span></button>
            <button className=' flex font-bold text-grey rounded-full px-2 lg:px-5 uppercase items-center justify-center text-[10px] lg:text-[16px] leading-10'>learn more <span className='pl-2'><IoIosArrowForward strokeWidth={20} style={{ color: 'grey' }} /></span></button>
          </div>
          <p className='text-[18px] text-dark font-bold font-ClashDisplay tracking-[-0.5px] mt-20'>Trusted By The Top Clients</p>
        </div>
        <div className='mt-10 w-[100%]'>
          <img className='hidden-on-phone ml-auto lg:mr-60 w-[100px] h-[45px]' src={framerimg} alt="framer logo" />

          <img className='mr-[40px] lg:hidden md:hidden w-[60px] h-7 ml-auto lg:mr-60' src={framerimg} alt="framer logo" />
        </div>

        <div className=' lg:ml-60 mt-[-5] lg:mt-[-2] w-[80%] lg:w-[50%] items-center justify-around  flex'>
          <img className='hidden-on-phone lg:w-[120px] lg:h-[30px] ml-auto' src={square} alt="framer logo" />
          <img className='hidden-on-phone  ml-auto lg:w-[120px] lg:h-[50px]' src={basecamp} alt="framer logo" />
          <img className='hidden-on-phone ml-auto lg:w-[100px] lg:h-[50px] ' src={maze} alt="framer logo" />
          <img className='hidden-on-phone ml-auto lg:w-20 lg:h-[25px]' src={loom} alt="framer logo" />

          <img className='lg:hidden md:hidden  ml-auto w-[60px] h-[15px]' src={square} alt="framer logo" />
          <img className='lg:hidden md:hidden ml-auto  w-[60px] h-[25px]' src={basecamp} alt="framer logo" />
          <img className='lg:hidden md:hidden ml-auto  w-[60px] h-[30px] ' src={maze} alt="framer logo" />
          <img className='lg:hidden md:hidden ml-auto w-[60px] h-[15px]' src={loom} alt="framer logo" />



        </div>

      </section>

    </div>
  )
}
