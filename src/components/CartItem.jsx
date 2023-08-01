import { useNavigate } from "react-router-dom";
import { useCart } from "../stateManagement";

export const CartItem = ({ id, title, detail, rating, price, best_seller, props, in_stock }) => {
    const { remove_from_cart } = useCart()
    const redirect = useNavigate()


    const clickHandler = () => {
      remove_from_cart({ id, title, detail, rating, price, best_seller, props, in_stock })
    }

    return(
      <li className='flex h-[77px] mt-2 pb-1 px-6 max-sm:px-1 border-b-2 border-neutral-400 dark:border-slate-400' onClick={()=>redirect(`/product/${id}`)}>
        <div className='h-full pr-3'>
          <img className='h-full' src='/heroImage.png' alt='view of the product' />
        </div>
        <div className='sm:grow overflow-y-auto'>
          <h1 className='text-xl max-sm:text-base overflow-y-auto w-full'>{title}</h1>
          <button className='inline px-1 py-0.5 mt-1 align-top text-center text-white rounded-md bg-rose-500 hover:bg-rose-600' onClick={clickHandler}>remove</button>
        </div>
        <div className='w-10'>
          <p>R {price}</p>
        </div>
      </li>
    )
  }