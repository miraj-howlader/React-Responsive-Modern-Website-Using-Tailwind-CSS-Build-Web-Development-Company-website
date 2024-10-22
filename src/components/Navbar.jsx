
import React, { useEffect, useState } from 'react'
import { BiPhoneCall, BiSolidSun,BiSolidMoon } from 'react-icons/bi'
import { FaCaretDown } from 'react-icons/fa'
import { HiMenuAlt1,HiMenuAlt3 } from 'react-icons/hi'
import MobileNav from './MobileNav'
const Navbar = () => {
    const [theme,setTheme] = useState('dark')
    const element =document.documentElement;
    const [showMenu,setShowMenu] = useState(false)

    useEffect(()=>{
        if(theme === 'dark'){
            element.classList.add('dark');
            localStorage.setItem('theme','dark')
        }else{
            element.classList.remove('dark')
            localStorage.removeItem('theme')
        }

    },[theme])

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    
  return (
    <>
    <header className=' relative z-[99] right-0 bg-navbar text-white border-b-[1px]
     border-primary/50'>
        <nav className="container flex items-center justify-between
         h-[70px] py-2">
            {/* Logo section  */}
            <div className=' text-2xl md:text-3xl text-white'>
                <a href="#">
                    COZ <span className=' text-primary inline-block font-bold'>WEB</span>
                </a>
            </div>
            {/* Desktop section  */}
            <div className=' hidden lg:flex'>
                <ul className=' flex items-center gap-4'>
                    <li className=' group relative cursor-pointer'>
                        <a href="" className=' flex items-center
                     gap-[2px] h-[72px]'>
                    Home
                    <span>
                        <FaCaretDown className=' transition-all duration-300
                         group-hover:rotate-180'/>
                    </span>
                        </a>
                        {/* Dropdown section  */}
                        <div className=' absolute -left-9 z-[99999]
                         hidden w-[150px] bg-white shadow-md p-2 text-black
                          group-hover:block rounded-md'>
                            <ul className='  space-y-3
                             '>
                                <li className=' p-2 hover:bg-violet-200'>Services</li>
                                <li className=' p-2 hover:bg-violet-200'>About us</li>
                                <li className=' p-2 hover:bg-violet-200'>Privacy Policy</li>
                            </ul>
                        </div>
                        </li>



                    <li className=' group  cursor-pointer'>
                        <a href="" className=' flex items-center
                     gap-[2px] h-[72px]'>
                   Services
                    <span>
                        <FaCaretDown className=' transition-all duration-300
                         group-hover:rotate-180'/>
                    </span>
                        </a>
                        {/* Dropdown section  */}
                        <div className=' absolute left-0 z-[99999]
                         hidden w-full bg-white shadow-md p-2 text-black
                          group-hover:block rounded-md'>
                            <div className=' grid grid-cols-3 gap-5'>
                                <div className=' overflow-hidden'>
                                    <img src="https://picsum.photos/200/300" alt=""
                                    className=' max-h-[300px] w-full rounded-b-3xl
                                     object-fill'
                                   />
                                </div>
                                <div className=' col-span-2  mt-4'>
                                    <h1 className=' text-xl text-slate-600'>Best Selling</h1>
                                    <p className=' text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloremque, in sit unde recusandae porro accusamus cumque quibusdam saepe deserunt libero, veritatis corporis culpa ipsam, quas quo animi! Sint amet ab quae delectus. Repellendus, asperiores?,</p>
                                    <div className=' grid grid-cols-3 mt-4'>
                                  <div >
                                    <h1 className=' pb-2 text-2xl font-semibold'>Development</h1>
                                    <ul className=' space-y-2'>
                                        <li className=' cursor-pointer text-black/80
                                         hover:text-primary'>Web Development</li>
                                        <li className=' cursor-pointer text-black/80
                                         hover:text-primary'>Mobile Development</li>
                                        <li className=' cursor-pointer text-black/80
                                         hover:text-primary'>Software Development</li>
                                    </ul>
                                   
                                  </div>
                                  <div>
                                  <h1 className=' pb-2 text-2xl font-semibold'>Other Services</h1>
                                    <ul className=' space-y-2'>
                                        <li className=' cursor-pointer text-black/80
                                         hover:text-primary'>Web Development</li>
                                        <li className=' cursor-pointer text-black/80
                                         hover:text-primary'>Mobile Development</li>
                                        <li className=' cursor-pointer text-black/80
                                         hover:text-primary'>Software Development</li>
                                    </ul>
                                  </div>
                                  <div>
                                  <img src="https://picsum.photos/180" alt="" />
                                  </div>
                                </div>
                                   
                                
                                
                                </div>
                            </div>
                        </div>
                        </li>


                        {/* Dropdown menu  */}


                   




                    <li><a href="">Contact us</a></li>
                    <li>
                       <div className=' flex items-center gap-4'>
                       <div>
                            <BiPhoneCall className=' text-2xl
                             w-[40px] h-[40px] text-white
                              bg-primary hover:bg-primary/90
                               rounded-md p-2'/>
                        </div>
                        <div className=' hidden lg:flex'>
                            <p>Call us on</p>
                            <p>
                                <a href="#">+91 1234 5678</a>
                            </p>
                        </div>
                        
                       </div>
                    </li>
                    {/* Light and dark mode switcher  */}
            
                   {
                    theme === 'dark'? 
                    <BiSolidSun  className='text-2xl cursor-pointer'
                    onClick={()=>setTheme('light')}/>
                    : <BiSolidMoon  className='text-2xl cursor-pointer'
                    onClick={()=>setTheme('dark')}/>
                   }

        


                   

                </ul>
            </div>
            

           <div className=' lg:hidden'>
           {
           showMenu 
            ? <HiMenuAlt1
            onClick={toggleMenu}
            size={30}
             className=' cursor-pointer transition-all'/>
            : <HiMenuAlt3
            onClick={toggleMenu}
            size={30}
             className=' cursor-pointer transition-all'/>
            }
           </div>
            {/* Mobile menu section  */}
           
        </nav>
      
    </header>
    <MobileNav showMenu={showMenu}/>
    </>
  )
}

export default Navbar
