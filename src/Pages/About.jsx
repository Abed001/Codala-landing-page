import { React, useState } from 'react'
import LogoIpsumSvg from '../Components/svg/LogoIpsumSvg'
import Card from '../Components/Card'
import shuttle from '../assets/shuttle.png'
import dollar from '../assets/dollar.png'
import sampling from '../assets/shuttle.png'
import { motion, useTransform, useScroll, animate } from "framer-motion";
import { useRef } from "react"

export default function About() {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress,
    [0.5, 0.70, 1],
    ["0%", "-30%", "-50%"])

  const card={
    initial: {
          y: 0
        },
      goup: {
            y: 100,
        transition: { duration: 1 }
          },
        
  }


  const data = [
    { id: 1, image: sampling, title: 'Qualitative' },
    { id: 2, image: shuttle, title: 'FastToDeploy' },
    { id: 3, image: dollar, title: 'ReasonablyPriced' },
  ];
  return (
    <div ref={ref} className='relative ' id='about'>
      <motion.button /*variants={card} initial="ons" whileInView="offscreen"*/ className='lg:ml-20 mt-10 ml-10 lg:mt-40 w-[150px] lg:w-[200px] font-semibold justify-between lg:justify-around bg-lightpurple border-purple border-2 rounded-full px-5 py-2 lg:py-0  uppercase flex items-center text-[10px] lg:text-[14px] lg:leading-10 '> <span className='mr-2'><LogoIpsumSvg /></span>about us</motion.button>
      <div className='mt-10 px-10 lg:px-20 flex justify-between lg:justify-center'>
        <h1 className='lg:w-[70%] tracking-[-2px] lg:tracking-[-3px] font-semibold font-ClashDisplay text-[24px] lg:text-[48px] text-blackc'><span>Code With Passion:</span>
          <span className='block'>Codala's Innovative Solutions</span></h1>
        <p className='w-[30%] text-[9px] lg:text-[18px]'>Lorem ipsum dolor sit amet consectetur. Nisl elit dui eget varius sit. Elit ac aenean quis enim ipsum dolor nunc mattis.</p>
      </div>
      <motion.div variants={card} initial="initial" whileInView="goup" style={{ x, opacity }} className='mt-10 items-center gap-5 lg:px-20 justify-between w-[100%] flex flex-col lg:flex-row'>

        {data.map((item, index) => (
          <Card data={item} key={item.id}
          />
        ))}
      </motion.div>
    </div>
  )
}
