import React from 'react'
import Navbar from './components/Navbar'
import HydrationEssentials from './components/HydrationSection'
import BottleWithCapAnimation from './components/BottleWithCapAnimation'
import SmartAnimation from './components/SmartAnimation'
import Footer from './components/Footer'

const page = () => {
  return (
    <>
    <Navbar />
    <BottleWithCapAnimation />
    <HydrationEssentials />
    <SmartAnimation />
    <Footer />
    </>
  )
}

export default page