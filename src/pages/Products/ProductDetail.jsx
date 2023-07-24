import React, { useState, useEffect } from 'react'
import { CartBtn, Footer, Stars } from "../../components";
import { useFetch } from "../../hooks";
import { useParams } from "react-router-dom";
import { useTitle } from "../../hooks";

export const ProductDetail = () => {
  const params = useParams()
  const response = (useFetch(`products?id=${params.id}`))[0]
  const [list, setList ] = useState(response || null)
  useTitle("Product")
  
  useEffect(()=>{
    setList(response)
  },[response])



  return (
    <main className=' my-auto py-8 overflow-y-auto'>
      {list && 
        <div className='mb-12'>
          {/* Product Title */}
          <h2 className='text-center text-3xl mb-3 p-1.5 ' >{list.title}</h2>
          <div className='flex'>
            {/* image block */}
            <div className='w-1/2'>
              <img src='/heroImage.png' alt='the graphic of the item' />
            </div>
            <div className='w-1/2 p-4'>
              {/* Price */}
              <h3 className='text-2xl'>R {list.price}</h3>
              {/* Rating */}
              <ul className='flex my-1 space-x-1 text-lg text-amber-300'>
                <Stars rating={list.rating} />
              </ul>
              {/* filters */} 
              <ul className='flex my-2 space-x-2'>
                {list.best_seller && <li key="0"  className='px-1.5 rounded-md border-[1px] border-amber-300 bg-amber-300 text-white'>Best Seller</li>}
                <li className={`px-1.5 rounded-md border-[1px] ${response.in_stock? "border-amber-300 bg-amber-300": "border-bg-rose-600 bg-rose-600"} text-white`}>{list.in_stock? "In Stock": "Out of Stock"}</li>
              </ul>
              {/* controls */}
                <div className='my-4'><CartBtn props={list}  disabled={!list.in_stock} /></div>
              {/* Product detail */}
              <p>{list.detail}</p>
            </div>
          </div>
        </div>
      }
      <Footer />
    </main>
  )
}
