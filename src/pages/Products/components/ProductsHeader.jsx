import React, { useState } from 'react'
import { SideBar } from './SideBar'

export const ProductsHeader = () => {
    const [btnState, setBtnState] = useState(true)
    const [products, setProducts] = useState([])
  return (
    <>
        <div className='flex justify-between h-12 px-4 py-4'>
            <h3 className='text-lg font-semibold'>All Products({products.length})</h3>
            <button className='text-lg font-semibold'>
                <i className='bi bi-arrow-down-circle'></i>
            </button>
            
            <SideBar />

        </div>
    </>
  )
}
