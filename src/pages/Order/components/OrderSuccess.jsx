import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../../stateManagement";

export const OrderSuccess = ({order}) => {
    const { clear_cart } = useCart()

    useMemo(() => clear_cart(), [clear_cart])


    return(
      <>
        <div className='w-[700px] mx-auto px-4 py-6 rounded-lg border-2 border-gray-200 dark:border-slate-400 dark:shadow-lg dark:shadow-slate-400' >
          
          <div className='flex justify-center mb-8'>
            <i className='bi bi-check-circle text-8xl text-emerald-400'></i>
          </div>
      
          <div className='flex flex-col mt-4'>
            <p className='text-center'>Your order has been processed</p>
            <p className='text-center'>Your order ID: {order && order.id} </p>
            <p className='text-center'>Check your email <span className='text-lg font-semibold text-green-600 dark:text-emerald-400'>{order.user.email}</span> for the receipt and more details</p>
            <p className='text-center'>Payment ID:<span className='text-lg font-semibold text-green-600 dark:text-emerald-400'>{}</span></p>
            <p className='text-center'>Thank you <span className="font-semibold">{order.user.name}</span> for shopping with us</p>
        
            <div className='flex justify-center my-6'>
              <Link className='px-2 py-1 rounded-lg text-white bg-green-400 hover:scale-110 hover:bg-green-600' to='/products'>Continue Shopping <i className='bi bi-cart'></i></Link>
            </div>
          </div>
          
        </div>
      </>
    )
  }