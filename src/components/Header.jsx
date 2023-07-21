"use client";
import React from 'react'
import { Link } from "react-router-dom";

import { useTheme } from "../hooks";

export const Header = () => {
  const { toggleTheme, isDark } = useTheme()

  return (
    <header className='flex flex-row justify-between h-16 px-[120px] text-white bg-gradient-to-r from-rose-500 via-cherry-400 to-[#4B0F19]'>
        <div className='h-full'>
            {/* TODO: logo and Name */}
            <Link to='/' className='flex place-items-center h-full px-2 text-3xl font-semibold cursor-pointer'>CodeBooks</Link>
        </div>
        <div className='flex h-full'>
            {/* setting btn */}
            <button className='header-btn group'>
              <i className='bi bi-gear'></i>
              
            <div id='menu'  className='absolute scale-0 -translate-y-1/3  group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 ease-in'>
              <div className='relative top-1 -left-1.5 z-10text-lg bg-cherry-600'>
                <button className='header-btn' onClick={toggleTheme}>
                  <i className={`bi bi-${!isDark? "moon-fill": "sun-fill"}`}></i>
                </button>
                <a href='/'>
                  <button className='header-btn' >
                    <i className={`bi bi-github`}></i>
                  </button>
                </a>
              </div>
            </div>
            </button>

            {/* search btn */}
            <button className='header-btn'>
              <i className='bi bi-search'></i>
            </button>

            {/* Cart btn */}
            <button className='header-btn'>
              <i className='bi bi-cart'></i>
            </button>

            <button className='header-btn'>
              <i className='bi bi-octagon'></i>
            </button>
        </div>
    </header>
  )
}
