import React from 'react'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import googlePlay from "../assets/Google Play.png"
import playStore from "../assets/Play Store.png"
import { CiInstagram } from 'react-icons/ci'
import bg from "../assets/Background.png"

const Footer = () => {
  return (
    <div className='mb-10'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 px-6 md:px-0 lg:grid-cols-5 my-16 gap-5 md:gap-0'>
        {/* logo section */}
        <div>
            <h1 className='poppins-medium text-4xl mb-5'>Jadoo.</h1>
            <p className='poppins-medium text-sm text-[#5E6282]'>Book your trip in minute, get full Control for much longer.</p>
        </div>
        {/* nav-1 section */}
        <div className='lg:pl-10'>
            <h1 className='poppins-bold text-lg mb-5'>Comapny</h1>
            <ul className='text-[#5E6282] space-y-2 poppins-medium'>
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
            </ul>
        </div>
        {/* nav-2 section */}
        <div className='lg:pl-10'>
            <h1 className='poppins-bold text-lg mb-5'>Contact</h1>
            <ul className='text-[#5E6282] space-y-2 poppins-medium'>
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Affilates</li>
            </ul>
        </div>
        {/* nav-3 section */}
        <div className='lg:pl-10'>
            <h1 className='poppins-bold text-lg mb-5'>More</h1>
            <ul className='text-[#5E6282] space-y-2 poppins-medium'>
                <li>Airlinefees</li>
                <li>Airline</li>
                <li>Low fare tips</li>
            </ul>
        </div>
        {/* social links */}
        <div className='space-y-3'>
            <div className='flex gap-3 items-center'>
                <span className='bg-white shadow rounded-full p-3'><FaFacebookF/></span>
                <span className='text-white  rounded-full p-5 text-lg' style={{
                    backgroundImage:`url(${bg})`,
                    backgroundSize:'cover'
                }}><CiInstagram/></span>
                <span className='bg-white shadow rounded-full p-3'><FaTwitter/></span>
            </div>
            <p className='text-[#5E6282] poppins-medium text-lg'>Discover our app</p>
            <div className='flex gap-2'>
                <img src={googlePlay} alt="" className='w-[107px] h-[35px]'/>
                <img src={playStore} alt="" className='w-[100px] h-[35px]'/>
            </div>
        </div>
      </div>
      <p className='text-center poppins-medium text-[#5E6282]'>All rights reserved@jadoo.co</p>
    </div>
  )
}

export default Footer
