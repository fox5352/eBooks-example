import React from 'react'
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className='flex p-2 my-4 pb-6 mb-10 rounded-xl shadow-xl dark:shadow-slate-500' >
        <div className='flex flex-col self-center py-auto pr-5 w-3/4'>
            <h2 className='pb-4 font-semibold text-4xl text-cherry-600 dark:text-cherry-400'>The best eBook store !</h2>
            <p className='pl-3 max-w-[490px]'>
                CodeBooks is the best place to get high quality, cheap coding eBooks.
                Find ratings and access the newest books digitally
            </p>
            <Link to='/products' className='w-24 px-3 py-1 mx-2 my-3.5 rounded-lg text-[1.2rem] text-center text-white bg-[crimson] dark:bg-cherry-600 hover:bg-cherry-500'>Explore</Link>
        </div>
        <div className='p-3'>
            <img className='rounded-lg' draggable='false'  src='./heroImage.png' alt='the hero graphic' />
        </div>
    </div>
  )
}
