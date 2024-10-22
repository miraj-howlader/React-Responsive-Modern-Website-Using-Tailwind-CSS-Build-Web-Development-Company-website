import React from 'react'
import { FaInstagram, FaLinkedin, FaLocationArrow, FaPhone } from 'react-icons/fa'
import FooterLInk from './FooterLInk'
import { MdFacebook } from 'react-icons/md'

const FooterLink = [
  {
    id: 1,
    name: "Home",
    link: ''
  },
  {
    id: 2,
    name: "About",
    link: ''
  },
  {
    id: 3,
    name: "Services",
    link: ''
  },
  {
    id: 4,
    name: "Contact Us",
    link: ''
  },
]

const links = [
  {
    name:'Privacy Policy'
  },
  {
    name:'Services'
  },
  {
    name:'About us'
  },
]
const Footer = () => {
  return (
    <>
      <footer className=' text-white rounded-t-3xl bg-gradient-to-r
      from-violet-950 to-violet-900'>
        <div className=' mx-auto max-w-[1200px] py-4'>
          {/* Footer container section  */}
          <div className=' grid py-5 md:grid-cols-3 '>
            <div className=' px-3 py-8'>
              <h1 className=' mb-3 text-justify text-xl font-bold sm:text-left
           sm:text-3xl'>WEB
                <a href="#home">
                  <span className=' inline-block font-bold text-primary'>COZ</span>
                </a>
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio commodi cum ut.</p>
              <br />
              <div className=' flex items-center gap-3'>
                <FaLocationArrow />
                <p>Noida, Uttar Pradesh</p>
              </div>
              <div className=' flex items-center gap-3 mt-3'>
                <FaPhone />
                <p>++ 9445 4543 40543</p>
              </div>
            </div>
            <div className=' grid grid-cols-2 sm:grid-cols-3 md:pl-3
          col-span-2'>
              <div className=' px-4 py-8'>
                <h1 className=' mb-3 text-justify text-xl justify-center
             font-bold sm:text-left sm:text-xl'>Important Links</h1>
                <ul className=' flex flex-col mt-4 space-y-4'>
                  <FooterLInk FooterLink={FooterLink} />
                </ul>
              </div>

              <div className=' px-4 py-8'>
                <h1 className=' mb-3 text-justify text-xl justify-center
             font-bold sm:text-left sm:text-xl'> Links</h1>
                <ul className=' flex flex-col mt-4 space-y-4'>
                  <FooterLInk FooterLink={links} />
                </ul>
              </div>
              <div className='px-4 py-8 sm:text-center'>
              <h1 className=' mb-3 text-justify text-xl justify-center
             font-bold sm:text-left sm:text-xl'> Social Links</h1>
              <div className=' flex flex-col gap-3'>
                <h1 className=' text-xl font-bold'>Subscribe to Our Newsletter</h1>
                <input type="text" placeholder='Enter your email' 
                className=' rounded-full  px-3 py-1 text-black
                 focus:border-sky-500 focus:outline-none
                  focus:ring-2 focus:ring-sky-500'/>
                  <div className=' flex  gap-3 mt-3'>
                    <a href="#">
                    <MdFacebook className=' hover:scale-110 text-2xl hover:bg-gray-300 rounded-md transition-all duration-300 hover:text-white'/>

                    </a>
                    <a href="#">
                    <FaInstagram className=' hover:scale-110 text-2xl hover:bg-gray-300 rounded-md transition-all duration-300 hover:text-white'/>

                    </a>
                    <a href="#">
                    <FaLinkedin className=' hover:scale-110 text-2xl hover:bg-gray-300 rounded-md transition-all duration-300 hover:text-white'/>

                    </a>
                  </div>
              </div>
              </div>

            </div>
          </div>
          <div className=' bottom-footer'>
            <p className=' border-t-2 border-gray-300/50 py-4
           text-center'>Copyright @ 2024. All rights reserved</p>
          </div>
        </div>

      </footer>

    </>
  )
}

export default Footer
