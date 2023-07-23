import { CartItem } from "./CartItem";

export const CartList = ({cartData}) => {

    const mapper = ({id, title, price, url, ...props}) => {
      return <CartItem key={id} id={id} title={title} price={price} url={''} />
    }
  
    return(
      <>
        <div>
          <h2 className='pb-4 mb-2 text-2xl tracking-wider text-center underline underline-offset-4'>My Cart {0}</h2>
        </div>
        <ul className='flex flex-col'>
          {cartData.map(mapper)}
        </ul>
  
        <div className='flex justify-between px-4 py-4 border-b-2 rounded-md border-neutral-400'>
            <p className='text-xl'>Total Amount:</p>
            <p className='text-xl'>{0}</p>
        </div>
        <div className='flex justify-end px-6'>
          <button className='px-4 py-2 my-6 rounded-lg text-white bg-green-400 hover:scale-110 hover:bg-green-600'>PLACE Order <i className='bi bi-arrow-right'></i></button>
        </div>
      </>
    )
  }