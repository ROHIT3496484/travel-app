import React from 'react'
import weather from "../assets/weather.png"
import plane from "../assets/plane.png"
import mic from "..//assets/mic.png"
import setting from "../assets/setting.png"
import rectangle from "../assets/Rectangle.png"
import Plus from "../assets/plus.png"

const Service = () => {
    return (
        <div className='mt-48 relative'>
            <div className='max-w-7xl mx-auto pb-1 relative'>
                <h3 className='text-sm text-center font-semibold text-[#5E6282]'>CATEGORY</h3>
                <h1 className='text-center volkhov-bold text-[#14183E] text-3xl md:text-5xl mt-2'>We Offer Best Services</h1>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-0 mt-20 mb-20 place-items-center'>
                    <div className='flex flex-col gap-3 items-center w-[190px] h-[227px]'>
                        <img src={weather} alt="" />
                        <h1 className='font-sans font-semibold text-lg'>Calculated Weather</h1>
                        <p className='text-center text-[#5E6282] poppins-medium text-sm px-4'>Built Wicket longer admire do barton vanity itself do in it.</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center lg:w-[267px] lg:h-[280px] bg-white lg:shadow-2xl lg:rounded-2xl lg:p-9'>
                        <img src={plane} alt="" />
                        <h1 className='font-sans font-semibold text-lg'>Best Flights</h1>
                        <p className='text-center text-[#5E6282] poppins-medium text-sm px-4'>Engrossed listening. Park gate sell they west hard for the.</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center w-[190px] h-[227px]'>
                        <img src={mic} alt="" />
                        <h1 className='font-sans font-semibold text-lg'>Local Events</h1>
                        <p className='text-center text-[#5E6282] poppins-medium text-sm px-4'>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                    </div>
                    <div className='flex flex-col bg-white gap-3 items-center w-[190px] h-[227px]'>
                        <img src={setting} alt="" />
                        <h1 className='font-sans font-semibold text-lg'>Customization</h1>
                        <p className='text-center text-[#5E6282] poppins-medium text-sm px-3'>We deliver outsourced aviation services for military customers</p>
                    </div>
                </div>
                <img src={rectangle} alt="" className='absolute bottom-10 left-72 -z-10'/>

            </div>
            <img src={Plus} alt="" className='absolute top-0 right-10  -z-10'/>
        </div>
    )
}

export default Service
