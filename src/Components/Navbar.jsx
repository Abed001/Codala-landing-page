import { React, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { IoIosArrowForward } from "react-icons/io";
import { Spin as Hamburger } from 'hamburger-react'
import Groupvector from '/src/assets/Groupvector.svg'
import LogoIpsumSvg from './LogoIpsumSvg';

export default function Navbar() {
    return (
        <div>
            <nav className='z-50 font-Manrope relative flex items-center justify-between'>
                <div className='flex'>
                    <img className='absolute top-0 lg:left-20 h-[40px] lg:h-[70px] mt-[-10px] mx-0 ' src="./src/assets/logo.svg" alt="" />
                    <p className='mt-2 font-bold text-[1rem] lg:text-[1.5rem] absolute top-0 left-[30px] lg:left-[130px] '>Codala</p>
                </div>
                <div className='flex justify-items-centerborder-blackc lg:ml-0 '>
                    <ul className='ml-20 lg:ml-60 font-semibold text-[10px] lg:text-[1rem] flex gap-5 lg:gap-[70px] uppercase'>
                        <Link to='#home'><li>Home</li></Link>
                        <Link to='#about'><li>About</li></Link>
                        <Link to='#services'><li>Services</li></Link></ul>
                </div>


                <button className='lg:mr-20 flex  font-bold text-white bg-purple rounded-full px-2 lg:px-5 uppercase items-center justify-center text-[10px] lg:text-[16px] leading-10'>contact us <span className='pl-2'><IoIosArrowForward strokeWidth={20} /></span></button>
            </nav>


            
        </div>
    )
}
