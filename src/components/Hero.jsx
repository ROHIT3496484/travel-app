import React from 'react'
import Navbar from './Navbar'
import Decore from "../assets/Decore.png"
import HeroImg from "../assets/Heroimg.png"
import redLine from "../assets/redline.png"
import { Play } from 'lucide-react'

const Hero = () => {
    return (
        <div 
          className="relative bg-cover bg-no-repeat bg-right"
          style={{
            backgroundImage: `url(${Decore})`,
            minHeight: '500px', // More flexible on mobile
          }}
        >
            <Navbar />
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 pt-7 pb-20'>
                {/* text section */}
                <div className='space-y-4 lg:space-y-7 lg:w-[630px]'>
                   <h3 className='font-bold text-[#DF6951] text-sm'>BEST DESTINATIONS AROUND THE WORLD</h3>
                   <div className='relative'>
                     <h1 className='text-4xl lg:text-7xl text-[#181E4B] font-bold lg:w-[545px] volkhov-bold z-50'>
                       Travel, enjoy and live a new and full life
                     </h1>
                     <img 
                       src={redLine} 
                       alt="" 
                       className='absolute top-10 lg:top-14 w-[200px] lg:w-[385px] h-[12px] lg:left-58 -z-10'
                     />
                   </div>
                   <p className='text-[#5E6282] lg:w-[477px] poppins-medium'>
                     Built Wicket longer admire do barton vanity itself do in it. 
                     Preferred to sportsmen it engrossed listening. 
                     Park gate sell they west hard for the.
                   </p>
                   <div className='flex flex-col sm:flex-row gap-4'>
                    <button className='bg-[#F1A501] hover:bg-[#e69500] text-white py-3 px-6 rounded-md transition-colors'>
                      Find out more
                    </button>
                    <div className='flex gap-2 items-center'>
                        <button className='bg-[#DF6951] hover:bg-[#d15840] rounded-full p-3 transition-colors'>
                          <Play fill='white' className='text-white w-3 h-3'/>
                        </button>
                        <p className='text-[#686D77]'>Play Demo</p>
                    </div>
                   </div>
                </div>
                {/* img section */}
                <img 
                  src={HeroImg} 
                  alt="Travel illustration" 
                  className='lg:w-[783px] lg:h-[764px] w-full max-w-md mt-10 md:mt-0'
                  loading="lazy"
                />
            </div>
        </div>
    )
}

export default Hero;
