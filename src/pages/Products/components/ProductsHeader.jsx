import React, { useState } from 'react'
import { SideBar } from './SideBar'

export const ProductsHeader = () => {
    const [btnState, setBtnState] = useState(false)
    const [products] = useState([])

    const toggleSideBar = () => {
      setBtnState(!btnState)
    }

  return (
    <>
        <div className='flex justify-between h-12 px-4 py-4 my-4 bg-inherit text-inherit rounded-xl shadow-lg dark:shadow-slate-500'>
            <h3 className='text-lg font-semibold'>All Products({products.length})</h3>
            <button className='text-lg font-semibold' onClick={toggleSideBar}>
                <i className='bi bi-arrow-down-circle'></i>
            </button>
            
            <SideBar setBtnState={setBtnState} state={btnState} />
        </div>
    </>
  )
}
