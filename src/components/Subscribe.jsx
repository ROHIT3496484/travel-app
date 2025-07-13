import React from 'react'
import subscribebg from "../assets/subscribebg.png"
import send from "../assets/send.png"
import mask1 from "../assets/mask1.png"
import mask2 from "../assets/mask2.png"
import { BiEnvelope } from 'react-icons/bi'

const Subscribe = () => {
  return (
    <div className='mt-20 mb-20 px-4'>
      <div className='rounded-2xl max-w-6xl mx-auto py-20 lg:px-48 px-12 relative' style={{
        backgroundImage: `url(${subscribebg})`,
        backgroundSize: 'cover',
        height:'350px',
        width:"100%",
        backgroundRepeat:'no-repeat'
      }}>
           <h3 className='poppins-semibold text-[#5E6282] md:text-2xl text-center'>Subscribe to get information, latest news and other interesting offers about Jadoo</h3>
           <div className='flex gap-3 mt-10 justify-center'>
            <div className='bg-white flex gap-2 items-center rounded-sm py-3 px-4 md:w-[300px] w-[200px]'>
                <BiEnvelope className='w-6 h-6 text-gray-500'/>
                <input type="text" placeholder='Your Email'/>
            </div>
            <button className='bg-[#ff866b] text-white px-4 py-2 rounded-sm'>Subscribe</button>
           </div>
           <img src={send} alt="" className='absolute -top-5 -right-2 md:-right-5'/>
           <img src={mask1} alt="" className='absolute bottom-0 left-10 opacity-20 -z-10 hidden md:block'/>
           <img src={mask2} alt="" className='absolute right-0 top-0 -z-10'/>
      </div>
    </div>
  )
}

export default Subscribe
