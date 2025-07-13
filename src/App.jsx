import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import Destinations from './components/Destinations'
import Trip from './components/Trip'
import Company from './components/Company'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Hero/>
      <Service/>
      <Destinations/>
      <Trip/>
      <Company/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default App