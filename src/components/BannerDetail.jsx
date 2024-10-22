import React from 'react'

const BannerDetail = ({reverse}) => {
  return (
    <section className=' bg-slate-100 dark:bg-slate-900 dark:text-white'>
        <div className=' container flex flex-col items-center justify-center py-10 md:h-[500px]'>
            <div className=' grid grid-cols-1 items-center
             gap-4 md:grid-cols-2'>
                {/* text section  */}
                <div className={`  flex flex-col items-start gap-4
                     text-left md:items-start md:p-3 md:text-left
                      ${reverse? "md:order-last":""}`}>
                   <h1 className='pl-4 text-2xl md:text-4xl'>We Build Apps That Get Trending on
                    Appworld
                   </h1>
                   <p className=' pl-4 text-sm text-slate-600
                    dark:text-slate-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident id numquam officia. Modi eum ullam expedita error sapiente repellendus officiis quisquam neque adipisci.</p>
                <div>
                    <ul className=' flex list-inside list-disc flex-col gap-2
                     md:gap-4'>
                        <li className=' pl-4 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, optio.</li>
                        <li className=' pl-4 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, optio.</li>
                        <li className=' pl-4 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, optio.</li>
                    </ul>
                    <button className='sm:pl-4 btn-primary mt-4'>Get Started</button>
                </div>
                
                </div>
                
                {/* Image section  */}
                <div className={reverse ? "order-1":""}>
                  <img className=' mx-auto w-full p-4 max-w-[400px]' src="https://picsum.photos/400/300" alt="" />
                </div>

            </div>

        </div>
      
    </section>
  )
}

export default BannerDetail
