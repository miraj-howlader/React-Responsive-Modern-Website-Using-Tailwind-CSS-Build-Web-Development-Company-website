import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const MobileNav = ({showMenu}) => {
  return  (
    <div className={`${showMenu ?"left-0":"-left-[100%]"} h-screen w-[75%]
     lg:hidden flex flex-col justify-between text-white bg-slate-950 top-0 z-50 fixed transition-all duration-300 pt-20 pb-6 px-8`}>
        <div>
            <div className=' flex items-center justify-start gap-3'>
                <FaUserCircle size={50}/>
            
            <div >
                <h1>Dilshad Ahmed</h1>
                <h1 className=' text-sm text-slate-500'>Premium User</h1>
            </div>
            </div>
            <nav  className=' mt-12'>
                <ul className=' space-y-4 text-xl'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </nav>
        </div>
        <div className=' footer'>
            <h1>@ 2024 All Rights Reserved.</h1>
        </div>
    </div>
  )
}

export default MobileNav
