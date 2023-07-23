export const CartItem = ({id, title, detail, rating, in_stock, best_seller, price, url}) => {

    return(
      <li className='flex h-[77px] pb-1 px-6 '>
        <div className='h-full pr-3'>
          <img className='h-full' src='/heroImage.png' alt='view of the product' />
        </div>
        <div className='grow'>
          <h1 className='text-xl'>{title}</h1>
          <button className='inline px-1 py-0.5 mt-1 align-top text-center text-white rounded-md bg-rose-500 hover:bg-rose-600'>remove</button>
        </div>
        <div className='w-10'>
          <p>R {price}</p>
        </div>
      </li>
    )
  }