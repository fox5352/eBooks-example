import React, { useState } from 'react'
import { SideBar } from './SideBar'

export const ProductsHeader = () => {
    const [btnState, setBtnState] = useState(false)
    const [products, setProducts] = useState([])

    const toggleSideBar = () => {
      setBtnState(!btnState)
    }

  return (
    <>
        <div className='flex justify-between h-12 px-4 py-4 bg-inherit text-inherit'>
            <h3 className='text-lg font-semibold'>All Products({products.length})</h3>
            <button className='text-lg font-semibold' onClick={toggleSideBar}>
                <i className='bi bi-arrow-down-circle'></i>
            </button>
            
            {btnState && <SideBar setBtnState={setBtnState} />}

        </div>
    </>
  )
}
