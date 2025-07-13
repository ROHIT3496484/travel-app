import React, { useState } from 'react'
import Logo from "../assets/Logo.png"
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  
  const handleNavClick = (item) => {
    console.log(`Navigating to ${item}`);
    // Add your navigation logic here
  };

  const handleLogin = () => {
    console.log("Login clicked");
    // Add login logic
  };

  const handleSignUp = () => {
    console.log("Sign up clicked");
    // Add signup logic
  };

  const handleLanguageChange = (e) => {
    console.log(`Language changed to ${e.target.value}`);
    // Add language change logic
  };

  return (
    <div className='pb-3 pt-5'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 md:px-0'>
        <img 
          src={Logo} 
          alt="Logo" 
          className='w-[90px] cursor-pointer' 
          onClick={() => handleNavClick('home')}
        />
        <nav className='md:flex gap-14 hidden'>
          <ul className='flex gap-16 items-center font-semibold'>
            {['Destinations', 'Hotels', 'Flights', 'Bookings'].map((item) => (
              <li 
                key={item}
                className='cursor-pointer hover:text-[#DF6951] transition-colors'
                onClick={() => handleNavClick(item.toLowerCase())}
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className='flex gap-10 items-center font-semibold'>
            <li 
              className='cursor-pointer hover:text-[#DF6951] transition-colors'
              onClick={handleLogin}
            >
              Login
            </li>
            <button 
              className='py-1 px-3 border rounded-md hover:bg-[#F1A501] hover:text-white transition-colors'
              onClick={handleSignUp}
            >
              Sign up
            </button>
            <select 
              onChange={handleLanguageChange}
              className='cursor-pointer bg-transparent border-none focus:outline-none'
            >
              <option value="EN">EN</option>
              <option value="ES">ES</option>
              <option value="FR">FR</option>
            </select>
          </ul>
        </nav>
        {open ? (
          <HiMenuAlt3 
            onClick={() => setOpen(!open)} 
            className='text-4xl md:hidden cursor-pointer' 
          />
        ) : (
          <HiMenuAlt1 
            onClick={() => setOpen(!open)} 
            className='text-4xl md:hidden cursor-pointer' 
          />
        )}
      </div>
      <ResponsiveMenu open={open} onItemClick={handleNavClick} />
    </div>
  )
}
export default Navbar
