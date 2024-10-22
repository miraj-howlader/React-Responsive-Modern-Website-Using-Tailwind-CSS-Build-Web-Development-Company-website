import React from 'react'

const BlogCard = ({Img}) => {
  return (
    <>
    <div className=' p-4 shadow-lg transition-all  duration-500
      hover:shadow-xl dark:bg-slate-950 dark:text-white'>
        <div className=' overflow-hidden'>
            <img src={Img} alt="No Image" 
            className=' mx-auto h-[250px] w-full object-cover transition-all
             duration-300 hover:skew-x-2 hover:scale-110'
            />

        </div>
        <div className=' flex justify-between pt-2'>
            <p>April 22, 2023</p>
            <p className=' line-clamp-1'>By Someone</p>
        </div>
        <div className=' space-y-2 py-3'>
            <h1 className=' line-clamp-1 font-bold'> How to grow your business. How to grow your business. How to grow your business</h1>
        <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repudiandae excepturi maiores nisi!</p>
        </div>
    </div>
      
    </>
  )
}

export default BlogCard
