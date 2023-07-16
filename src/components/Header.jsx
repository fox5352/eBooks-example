import React from 'react'
// import {  } from "react-router-dom";

export const Header = () => {
  return (
    <header className='flex flex-row justify-between px-[120px] h-16 bg-Cool-100 text-white'>
        <div className='h-full'>
            {/* logo */}
            <h2 className='flex place-items-center h-full px-2 text-3xl font-semibold cursor-pointer'>CodeBooks</h2>
            {/* <Link className='text-3xl font-semibold'>CodeBooks</Link> */}
        </div>
        <div className='flex h-full'>
            <button className='place-items-center min-w-[60px] h-full p-1.5 text-lg rounded-lg hover:bg-cherry-500'>cart</button>
            <button className='place-items-center min-w-[60px] h-full p-1.5 text-lg rounded-lg hover:bg-cherry-500'>cart</button>
            <button className='place-items-center min-w-[60px] h-full p-1.5 text-lg rounded-lg hover:bg-cherry-500'>cart</button>
            <button className='place-items-center min-w-[60px] h-full p-1.5 text-lg rounded-lg hover:bg-cherry-500'>cart</button>
        </div>
    </header>
  )
}
