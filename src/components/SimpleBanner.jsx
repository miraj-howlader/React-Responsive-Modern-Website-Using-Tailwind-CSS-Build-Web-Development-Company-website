import React from 'react'

const SimpleBanner = () => {
    return (
        <>
           <div className=' bg-primary'>
           <div className=' container py-8 md:py-12'>
                <div className=' grid grid-cols-1 gap-4 items-center md:grid-cols-3 md:gap-8'>
                   <div className=' px-2'>
                   <video
                        src='https://ik.imagekit.io/ikmedia/example_video.mp4'
                        poster='https://ik.imagekit.io/ikmedia/example_video.mp4/ik-thumbnail.jpg?tr=w-1200,h-680'
                        width='600'
                        height='300'
                        className='aspect-video w-full '
                        controls
                    />
                   </div>
                    <div className=' flex flex-col items-center gap-4 text-center
                     text-white dark:text-white  md:col-span-2
                      md:items-start md:text-left'>
                        <h1 className=' text-3xl font-semibold'>Market your next project with Coz</h1>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nemo repellat molestias, quod velit unde suscipit totam veritatis ratione iure natus quis culpa sed qui harum! Neque nulla reiciendis consequuntur?</p>
                    <button className=' btn-primary !bg-white !text-black'>Get Started</button>
                    </div>
                </div>



            </div>

           </div>

        </>
    )
}

export default SimpleBanner
