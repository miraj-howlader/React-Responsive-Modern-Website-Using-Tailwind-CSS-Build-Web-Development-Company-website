import React from 'react'
import HeroImg from '../assets/h.svg'
const Hero = () => {
  return (
    <div className=' h-[650px] md:h-[500px] bg-gradient-to-r
     from-violet-950 to-violet-900 pt-20'>
      <section className=' container flex flex-col items-center
       justify-between'>
        <div className=' grid grid-cols-1 items-center gap-8  md:grid-cols-2 text-white'>
          {/* text section  */}
          <div className=' flex flex-col items-center text-center
           gap-4 md:items-start md:text-left'>
            <h1 className=' text-4xl'>We  Build Apps that get Trending On Appworld</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum excepturi ratione quis ex dolores reiciendis! Illum perspiciatis exercitationem ex a dolores similique repudiandae facilis!</p>
              <div className=' flex space-x-4'>
                <button className='btn-primary'>Get Started</button>
                <button className='btn-outline'>Login</button>
              </div>
          </div>
          {/* Image section  */}
          <div className=' mx-auto max-w-xs p-4'>
            <img src={HeroImg} alt=""  />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
