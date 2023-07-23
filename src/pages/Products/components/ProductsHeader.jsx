import React, { useEffect, useRef, useState } from 'react'
import { SideBar } from './SideBar'

export const ProductsHeader = ({listLen}) => {
    const [btnState, setBtnState] = useState(false)
    const iconRef = useRef()

    useEffect(() => {
      btnState ? iconRef.current.classList.add('rotate-[450deg]') : iconRef.current.classList.remove('rotate-[450deg]')
      
    }, [btnState, iconRef])
    

    const toggleSideBar = () => {
      setBtnState(!btnState)
    }
  return (
    <>
      <div className='flex justify-between px-4 py-4 my-4 border-2 border-neutral-200 bg-inherit text-inherit rounded-xl shadow-lg dark:shadow-slate-500 dark:border-slate-500'>
          <h3 className='text-lg font-semibold'>All Products({listLen})</h3>
          <button className='text-xl font-semibold transition-all duration-500' onClick={toggleSideBar} ref={iconRef}>
              <i className='bi bi-arrow-down-circle' ></i>
          </button>
          
          <SideBar setBtnState={setBtnState} state={btnState} />
      </div>
    </>
  )
}
