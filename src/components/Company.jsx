import React from 'react'
import company1 from "../assets/company1.png"
import company2 from "../assets/company2.png"
import company3 from "../assets/company3.png"
import company4 from "../assets/company4.png"
import company5 from "../assets/company5.png"

const Company = () => {
  return (
    <div>
      <div className='max-w-6xl mx-auto flex flex-wrap w-full items-center md:gap-20 gap-4 justify-center px-6 md:px-0'>
        <img src={company1} alt="" className='lg:w-[150px] lg:h-[70px] grayscale hover:grayscale-0'/>
        <img src={company2} alt="" className='lg:w-[150px] lg:h-[70px] grayscale hover:grayscale-0'/>
        <img src={company3} alt="" className='lg:w-[150px] lg:h-[70px] grayscale hover:grayscale-0'/>
        <img src={company4} alt="" className='lg:w-[162px] lg:h-[40px] grayscale hover:grayscale-0'/>
        <img src={company5} alt="" className='lg:w-[100px] lg:h-[30px] grayscale hover:grayscale-0'/>
      </div>
    </div>
  )
}

export default Company
