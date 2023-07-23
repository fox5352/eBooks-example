import { useCart } from "../../../stateManagement";

export const CartItem = ({ id, title, detail, rating, price, best_seller, props, in_stock }) => {
    const { remove_from_cart,list } = useCart()


    const clickHandler = () => {
      remove_from_cart({ id, title, detail, rating, price, best_seller, props, in_stock })
    }

    return(
      <li className='flex h-[77px] mt-2 pb-1 px-6 border-b-2 border-neutral-400 dark:border-slate-400'>
        <div className='h-full pr-3'>
          <img className='h-full' src='/heroImage.png' alt='view of the product' />
        </div>
        <div className='grow'>
          <h1 className='text-xl'>{title}</h1>
          <button className='inline px-1 py-0.5 mt-1 align-top text-center text-white rounded-md bg-rose-500 hover:bg-rose-600' onClick={clickHandler}>remove</button>
        </div>
        <div className='w-10'>
          <p>R {price}</p>
        </div>
      </li>
    )
  }