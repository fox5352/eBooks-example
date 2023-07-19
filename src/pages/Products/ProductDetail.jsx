import React from 'react'
import { CartBtn, Stars } from "../../components";
import { useFetch } from "../../hooks";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const params = useParams()
  const { response } = useFetch(`products/${params.id}`)

  return (
    <main className='my-10'>
      {response && <>
        {/* Product Title */}
        <h2 className='text-center text-3xl p-1.5 ' >{response.title}</h2>
        <div className='flex'>
          {/* image block */}
          <div className='w-1/2'>
            <img src='/heroImage.png' />
          </div>
          <div className='w-1/2 p-4'>
            {/* Price */}
            <h3 className='text-2xl'>R {response.price}</h3>
            {/* Rating */}
            <ul className='flex my-1 space-x-1 text-lg text-amber-300'>
              <Stars rating={response.rating} />
            </ul>
            {/* filters */} 
            <ul className='flex my-2 space-x-2'>
              {response.best_seller && <li key="0"  className='px-1.5 rounded-md border-[1px] border-amber-300 bg-amber-300 text-white'>Best Seller</li>}
              <li className={`px-1.5 rounded-md border-[1px] ${response.in_stock? "border-amber-300 bg-amber-300": "border-bg-rose-600 bg-rose-600"} text-white`}>{response.in_stock? "In Stock": "Out of Stock"}</li>
            </ul>
            {/* controls */}
              <div className='mt-2 mb-4'><CartBtn/></div>
            {/* Product detail */}
            <p>{response.detail}</p>
          </div>
        </div>
      </>
      }
    </main>
  )
}
