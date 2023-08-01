import React from "react"
import { Link } from "react-router-dom";

export const OrderFailed = () => {
    return(
      <>
        <div className='w-[40vw] max-sm:w-[85vw] mx-auto px-4 py-6 rounded-lg border-2 border-gray-200 dark:border-slate-400 dark:shadow-lg dark:shadow-slate-400' >
          
          <div className='flex justify-center mb-8'>
            <i className='bi bi-exclamation-circle text-8xl text-red-400'></i>
          </div>
  
          <div className='flex flex-col mt-4'>
            <p className='text-center'>Your order has failed</p>
            <p className='text-center'>Contact us on <span className='text-lg font-semibold text-rose-600 dark:text-rose-400'>codeBooksHelp@gmail.com</span> for help</p>
            <p className='text-center'>Sorry for the inconvenience</p>
        
            <div className='flex justify-center my-6'>
              <Link className='px-2 py-1 rounded-lg text-white bg-green-400 hover:scale-110 hover:bg-green-600' to='/cart'>Continue Shopping <i className='bi bi-cart'></i></Link>
            </div>
          </div>
          
        </div>
      </>
    )
  }