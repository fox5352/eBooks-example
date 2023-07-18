import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className='flex flex-row justify-between h-16 px-[120px] text-white bg-gradient-to-r from-rose-500 via-cherry-400 to-[#4B0F19]'>
        <div className='h-full'>
            {/* TODO: logo and Name */}
            <Link to='/' className='flex place-items-center h-full px-2 text-3xl font-semibold cursor-pointer'>CodeBooks</Link>
        </div>
        <div className='flex h-full'>
            {/* TODO: icons: settings, Search cart, user */}
            <button className='place-items-center min-w-[60px] h-full p-1.5 text-lg rounded-lg hover:bg-cherry-500'>cart</button>
            <button className='place-items-center min-w-[60px] h-full p-1.5 text-lg rounded-lg hover:bg-cherry-500'>cart</button>
            <button className='place-items-center min-w-[60px] h-full p-1.5 text-lg rounded-lg hover:bg-cherry-500'>cart</button>
            <button className='place-items-center min-w-[60px] h-full p-1.5 text-lg rounded-lg hover:bg-cherry-500'>cart</button>
        </div>
    </header>
  )
}
