import React, { useRef, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useUser } from '../stateManagement/user/UserContext';


export const LogoutMenu = ({displayMenu, func}) => {
  const { logout } = useUser()
  const redirect = useNavigate()
  const menuRef = useRef(null)

  useEffect(() => {
    if (displayMenu) {
      menuRef.current.classList.remove('scale-0')
      menuRef.current.classList.add('scale-100')
    }else{
      menuRef.current.classList.remove('scale-100')
      menuRef.current.classList.add('scale-0')
    }

  }, [menuRef, displayMenu])
  
  const logOut = () => {
    logout()
    redirect('/')
    func()  
  }

  return (
    <div  className='absolute'>
        <div id='menu' ref={menuRef} className='relative flex flex-col ml-1 px-2 py-2 space-y-1 
                        bg-white border2 border-neutral-200 
                        text-black rounded-xl shadow-lg 
                        dark:shadow-slate-500 dark:border-slate-500 dark:text-white dark:bg-zinc-700
                        transition-all duration-150 ease-in scale-0 '>
            <p className=''>{}</p>
            <Link id='all' className='header-btn' to='/products' onClick={func}>All Books</Link>
            <Link id='dashboard' className='header-btn' to='/dashboard' onClick={func}>Dashboard</Link>
            <Link id='logout' className='header-btn' onClick={logOut}>Logout</Link>
        </div>
    </div>
  )
}
