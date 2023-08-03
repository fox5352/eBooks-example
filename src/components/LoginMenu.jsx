import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";


export const LoginMenu = ({ displayMenu, func }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    if (displayMenu) {
      menuRef.current.classList.remove('scale-0');
      menuRef.current.classList.add('scale-100');
    } else {
      menuRef.current.classList.remove('scale-100');
      menuRef.current.classList.add('scale-0');
    }

  }, [menuRef, displayMenu]);


  return (
    <div className={`absolute max-sm:right-0 ${displayMenu ? '' : 'hidden'}`}>
      <div id='menu' ref={menuRef} className='relative flex flex-col ml-1 px-2 py-2 space-y-1 
                        bg-white border2 border-neutral-200 
                        text-black rounded-xl shadow-lg 
                        dark:shadow-slate-500 dark:border-slate-500 dark:text-white dark:bg-zinc-700
                        transition-all duration-150 ease-in scale-0 '>
        <Link id='all' className='header-btn' to='/products' onClick={func}>All Books</Link>
        <Link id='login' className='header-btn' to='/login' onClick={func}>Login</Link>
        <Link id='register' className='header-btn' to='/register' onClick={func}>Register</Link>
      </div>
    </div>
  );
}
