import React from 'react'
import Rome from "../assets/Rome.png"
import London from "../assets/London.png"
import Europe from "../assets/Europe.png"
import flower from "../assets/flower.png"
import { BiSolidNavigation } from 'react-icons/bi'

const destinationjson = [
    {
        img: Rome,
        name: "Rome, Italy",
        price: "$5,42k",
        time: "10 Days Trip"
    },
    {
        img: London,
        name: "London, UK",
        price: "$4.2k",
        time: "12 Days Trip"
    },
    {
        img: Europe,
        name: "Full Europe",
        price: "$15k",
        time: "28 Days Trip"
    },
]

const Destinations = () => {
    return (
        <div className='mt-10'>
            <div className='max-w-7xl mx-auto relative'>
                <h3 className='text-sm text-center font-semibold text-[#5E6282]'>Top Selling</h3>
                <h1 className='text-center volkhov-bold text-[#14183E] text-3xl md:text-5xl mt-2'>Top Destinations</h1>
                <div className='md:grid-cols-3 grid-cols-1 grid gap-10 md:gap-0 place-items-center my-14'>
                    {
                        destinationjson.map((item, index) => {
                            return <div className='shadow-2xl rounded-2xl' key={index}>
                                <img src={item.img} alt="" className='-z-10' />
                                <div className='bg-white rounded-b-2xl z-50 px-4 py-4 space-y-3'>
                                    <div className='flex justify-between'>
                                        <p className='text-[#5E6282] font-semibold'>{item.name}</p>
                                        <p className='text-[#5E6282]'>{item.price}</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <BiSolidNavigation />
                                        <p className='text-[#5E6282]'>{item.time}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <img src={flower} alt="" className='absolute right-0 bottom-10 -z-10' />
            </div>
        </div>
    )
}

export default Destinations
