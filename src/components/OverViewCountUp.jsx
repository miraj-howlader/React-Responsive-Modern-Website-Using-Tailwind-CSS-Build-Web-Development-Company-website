import React from 'react'
import CountUp from 'react-countup'

const OverViewCountUp = () => {
  return (
    <section className=' container h-12 md:h-32 p-3'>
        <div className=' grid grid-cols-4 divide-slate-700 divide-x mx-auto w-full bg-white dark:bg-gray-500
         dark:text-white/70 max-w-[800px] shadow-lg
          -translate-y-20 md:-translate-y-12 my-4 md:p-8'>
           
            <div className=' flex flex-col items-center justify-center'>
                <CountUp className=' text-2xl font-bold' end={400} suffix='+' duration={9}/>
                <h className='sm:text-md text-lg md:text-lg'>Clients</h>
            </div>
            
           
            <div className=' flex flex-col items-center justify-center'>
                <CountUp className=' text-2xl font-bold' end={156} suffix='+' duration={9}/>
                <h className='sm:text-md text-lg md:text-lg'>Projects</h>
            </div>
            
           
            <div className=' flex flex-col items-center justify-center'>
                <CountUp className=' text-2xl font-bold' end={500} suffix='+' duration={9}/>
                <h className='sm:text-md text-lg md:text-lg'>Support</h>
            </div>
            
           
            <div className=' flex flex-col items-center justify-center'>
                <CountUp className=' text-2xl font-bold' end={900} suffix='+' duration={9}/>
                <h className='sm:text-md text-lg md:text-lg'>Satisfied</h>
            </div>
            
           
        </div>
      
    </section>
  )
}

export default OverViewCountUp
