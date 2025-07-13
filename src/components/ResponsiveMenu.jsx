import React from 'react'
import Logo from "../assets/Logo.png"

const ResponsiveMenu = ({ open }) => {
    return (
        <div className={`${open ? "left-0" : "-left-[100%]"} bg-white fixed bottom-0 top-0 z-20 h-screen w-[75%] justify-between px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
            <img src={Logo} alt="" className='w-[90px]' />
            <nav className='mt-14'>
                <ul className='flex flex-col gap-16 items-start font-semibold text-gray-800 text-2xl'>
                    <li>Destination</li>
                    <li>Hotels</li>
                    <li>Flights</li>
                    <li>Bookings</li>
                    <button className='bg-yellow-500 px-4 text-lg py-1 rounded-md'>Login</button>
                </ul>
            </nav>
        </div>
    )
}

export default ResponsiveMenu
