import React, { } from 'react'
import { Stars } from './Stars'
import { useNavigate } from "react-router-dom";

export const Card = ({id, title, detail, rating, price, bestSeller}) => {
  const link = useNavigate()
  
  // TODO: onClick to product page
  const redirect = () => {
    link(`/product/${id}`)
  }

  return (
    <div className='w-[340px] h-[400px] my-3 shadow-md rounded-xl hover:shadow-zinc-500 hover:cursor-pointer' onClick={redirect}>
        <div className='h-[45%] rounded-xl'>
            <img className='h-full w-full rounded-t-xl' src='/heroImage.png' alt='product' />
            {bestSeller && <i className='relative -top-[95%] left-[12px] px-1 rounded-sm text-sm bg-amber-500 text-white'>Best Seller</i>}
        </div>
        {/* TODO:better scroll bar */}
        <div className='flex flex-col h-[53%] px-4 text-left'>
            <h3 className='py-1.5 text-2xl font-semibold'>{title}</h3>
            <p className=' overflow-y-auto'>{detail}</p>
            <ul className='flex w-[25%] justify-between py-1.5 text-amber-600'>
              <Stars rating={rating} />
            </ul>
            <div className='flex justify-between'>
              <p className='self-center first-letter:font-semibold first-letter:tracking-widest'>R{price}</p>
              <button className='px-1.5 py-1.5 rounded-lg bg-sky-500 text-white hover:bg-sky-600'>Add to cart</button>
            </div>
        </div>
    </div>
  )
}
