import React from 'react'
import { Stars } from './Stars'
import { useNavigate } from "react-router-dom";
import { CartBtn } from './CartBtn';


export const Card = ({ id, title, detail, rating, price, best_seller, props, in_stock }) => {
  const link = useNavigate()
  
  // TODO: onClick to product page
  const redirect = () => {
    link(`/product/${id}`)
  }

  return (
    <div className='w-[340px] h-[400px] my-3 shadow-md rounded-xl hover:shadow-zinc-400 hover:cursor-pointer dark:shadow-slate-500 dark:hover:shadow-slate-300' onClick={redirect}>
        <div className='h-[45%] rounded-xl'>
            <img className='h-full w-full rounded-t-xl' src='/heroImage.png' alt='product' />
            {best_seller && <div className='absolute'>
              <i className='relative -top-[160px] left-[12px] px-1 rounded-sm text-sm bg-amber-500 text-white'>Best Seller</i>
            </div>}
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
              <CartBtn props={{ id, title, detail, rating, price,best_seller, props, in_stock }} disabled={!in_stock} />
            </div>
        </div>
    </div>
  )
}
