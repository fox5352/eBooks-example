"use client";
import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { useTheme } from "../hooks";
import { SearchBar } from './SearchBar';
import { LoginMenu } from "./LoginMenu";
import { LogoutMenu } from "./LogoutMenu";
import { useUser } from '../stateManagement/user/UserContext';

export const Header = () => {
  const { toggleTheme, isDark } = useTheme()
  const [searchBar, setSearchBar] = useState(false)
  const [ displayMenu, setDisplayMenu ] = useState(false)
  const { loggedIn } = useUser()

  const toggleBar = () => {
    setSearchBar(!searchBar)
  }

  const toggleMenu = () => {
    setDisplayMenu(!displayMenu)
  }

  return (
    <>
      <header className='flex flex-row justify-between h-16 sm:px-[120px] text-white bg-gradient-to-r from-rose-500 via-cherry-400 to-[#4B0F19]'>
          {/* TODO: logo and Name */}
          <div className='h-full'>
              <Link to='/' className='flex place-items-center h-full px-2 text-3xl font-semibold cursor-pointer'>
                <i class="bi bi-house-door"></i>
                <span className='hidden sm:flex'>CodeBooks</span>
              </Link>
          </div>
          <div className='flex h-full'>
              {/* settings menu */}
              <div className='group'>
              {/* setting btn */}
                <button className='header-btn'>
                  <div className='group-hover:animate-slow-spin'><i className='bi bi-gear'></i></div>
                </button>

                {/* menu */}
                <div id='menu'  className='absolute'>
                  <div className='relative -left-1 -top-0 z-10 scale-0 -translate-y-full group-hover:scale-100 group-hover:translate-y-0 flex flex-col px-1 py0.5 rounded-b-lg text-lg bg-cherry-600 transition-all duration-300 ease-in'>
                  
                    {/* Theme btn */}
                    <button className='header-btn hover:scale-90' onClick={toggleTheme}>
                      <i className={`bi bi-${!isDark? "moon-fill": "sun-fill"}`}></i>
                    </button>
                    {/* github btn TOGO: add link */}
                    <a href='https://github.com/fox5352/eBooks-example' target='_blank' rel='noreferrer'>
                      <button className='header-btn hover:scale-90' >
                        <i className={`bi bi-github`}></i>
                      </button>
                    </a>
                    
                  </div>
                </div>
              </div>

              {/* search btn */}
              <button className='header-btn' onClick={toggleBar}>
                <i className='bi bi-search'></i>
              </button>

              {/* Cart btn */}
              <Link to='/cart'>
                <button className='header-btn'>
                  <i className='bi bi-cart'></i>
                </button>
              </Link>

              <div>
                <button className='header-btn' onClick={toggleMenu}>
                  {/* if users authenticated change icon to bi-person-check and nav link */}
                  <i className={`bi bi-person${loggedIn? '-check text-2xl': ' text-xl'}`}></i>
                </button>
                  {loggedIn ? <LogoutMenu displayMenu={displayMenu} func={toggleMenu} /> :<LoginMenu displayMenu={displayMenu} func={toggleMenu} />}
              </div>
          </div>
      </header>
      <SearchBar state={searchBar} toggleBar={toggleBar} />
    </>
  )
}
