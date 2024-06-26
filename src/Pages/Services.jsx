import React from 'react'
import LogoIpsumSvg from '../Components/svg/LogoIpsumSvg.jsx'
import ServicesCard from '../Components/ServicesCard';
import servicessampling from '../assets/servicessampling.png'
import servicessampling2 from '../assets/servicessampling2.png'
import servicessampling3 from '../assets/servicessampling3.png'
import servicessampling4 from '../assets/servicessampling4.png'
import GroupVector from '../Components/svg/GroupVector.jsx'
import ServicesBigElipse from '../Components/svg/ServicesBigElipse.jsx'
import SmallServicesBigElipse from '../Components/svg/SmallServicesBigElipse.jsx'
import serviceselipse from "../assets/serviceselipse.png"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react"


export default function Services() {


  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);


  const data = [
    { id: 1, image: servicessampling, title: 'Website Development', desc: "Lorem ipsum dolor sit amet consectetur.Pharetra morbi sed dolor volutpat vivamus a ut. Orci." },
    { id: 2, image: servicessampling2, title: 'Mobile App Development', desc: "Lorem ipsum dolor sit amet consectetur.Pharetra morbi sed dolor volutpat vivamus a ut. Orci." },
    { id: 3, image: servicessampling3, title: 'Custom Software Development', desc: "Lorem ipsum dolor sit amet consectetur.Pharetra morbi sed dolor volutpat vivamus a ut. Orci." },
    { id: 4, image: servicessampling4, title: 'Artificial Intelligence', desc: "Lorem ipsum dolor sit amet consectetur.Pharetra morbi sed dolor volutpat vivamus a ut. Orci." },
  ];
  return (
    <div id='services' className='relative' ref={ref} >

      <div className=' hidden-on-phone absolute right-0 left-0 top-[-800px] -z-10'><ServicesBigElipse /></div>
      <div className='overflow-x-hidden lg:hidden md:hidden absolute right-0 left-0 top-[-300px] -z-10 '><SmallServicesBigElipse /></div>
      <span> <img className='z-10- absolute right-20 left-20' src={serviceselipse} /></span>


      <div className=' hidden-on-phone absolute right-0 left-0 top-[200px] opacity-[30%] -z-10'><GroupVector /></div>

      <div className=" flex flex-col justify-center items-center gap-y-5">
        <button className=' mt-40 lg:mt-80 w-[150px] lg:w-[200px] font-semibold justify-between lg:justify-around bg-lightpurple border-purple border-2 rounded-full px-5 py-2 lg:py-0 uppercase flex items-center text-[10px] lg:text-[14px] lg:leading-10 '> <span className='mr-2'><LogoIpsumSvg /></span>services</button>
        <h1 className="font-semibold text-[30px] lg:text-[60px] text-blackc font-ClashDisplay tracking-tighter wordSpacing">Our Core Services</h1>
        <p className='px-5 text-grey text-[15px] lg:text-[20px] font-medium font-Manrope text-center max-w-[600px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus natus nostrum laudantium tempora error ea
          deleniti? deleniti?
          deleniti? </p>
      </div>

      <motion.div  style={{ opacity }} className='z-50 mt-20 flex flex-col lg:flex-row justify-between px-20 items-center'>
        {data.map((item, index) => (
          <ServicesCard  data={item} key={item.id}
          />
        ))}
      </motion.div>

    </div>
  )
}
