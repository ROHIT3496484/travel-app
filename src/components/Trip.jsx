import React from 'react'
import destination from "../assets/destination.png"
import payment from "../assets/payment.png"
import airport from "../assets/airport.png"
import trip from "../assets/trip.png"

const Trip = () => {
  return (
    <div>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center'>
        <div className='space-y-6 lg:w-[800px] px-6 md:px-0'>
            <h3 className='poppins-medium text-[#5E6282] text-sm'>Easy and Fast</h3>
            <h1 className='volkhov-bold text-[#14183E] text-3xl md:text-5xl capitalize'>Book your next trip <br /> in 3 easy steps</h1>
            <div className='space-y-9 lg:w-[395px] lg:h-[289px]'>
                <div className='flex gap-3 items-center'>
                    <img src={destination} alt="" />
                    <div>
                        <h3 className='text-[#5E6282] poppins-bold'>Choose Destination</h3>
                        <p className='text-[#5E6282] poppins-regular text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <img src={payment} alt="" />
                    <div>
                        <h3 className='text-[#5E6282] poppins-bold'>Make Payment</h3>
                        <p className='text-[#5E6282] poppins-regular text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <img src={airport} alt="" />
                    <div>
                        <h3 className='text-[#5E6282] poppins-bold'>Reach Airport on Selected Date</h3>
                        <p className='text-[#5E6282] poppins-regular text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-6 md:px-8'>
            <img src={trip} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Trip
