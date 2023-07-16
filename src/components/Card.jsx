import React from 'react'

export const Card = ({title, detail, rating, price, bestSeller}) => {

  // TODO: onClick to product page  

  return (
    <div className='w-[340px] h-[400px] shadow-md rounded-xl hover:shadow-zinc-500 hover:cursor-pointer'>
        <div className='h-[45%] rounded-xl'>
            <img className='h-full w-full rounded-t-xl' src='/heroImage.png' alt='product' />
        </div>
        <div className='px-4 text-left'>
            <h3 className='py-1.5 text-2xl font-semibold'>{title}</h3>
            <p>{detail}</p>
            {/* TODO: star icons */}
            <div className='w-[25%] py-1.5 text-amber-600'>3/4</div>
            <div className='flex justify-between'>
              <p className='self-center first-letter:font-semibold first-letter:tracking-widest'>R{price}</p>
              <button className='px-1.5 py-1.5 rounded-lg bg-sky-500 text-white hover:bg-sky-600'>Add to cart</button>
            </div>
        </div>
    </div>
  )
}
