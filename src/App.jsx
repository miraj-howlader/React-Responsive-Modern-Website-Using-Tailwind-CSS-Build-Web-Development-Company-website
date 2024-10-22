import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OverViewCountUp from './components/OverViewCountUp'
import BannerDetail from './components/BannerDetail'
import SimpleBanner from './components/SimpleBanner'
import Blog from './components/Blog'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' dark:bg-gray-900  bg-white'>
      <Navbar/>
      <Hero/>
      <OverViewCountUp/>
      <BannerDetail/>
      <BannerDetail reverse={true}/>
      <SimpleBanner/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
