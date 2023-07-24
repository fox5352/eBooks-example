import { Link } from "react-router-dom";

export const EmptyList = () => {
    return(
      <>
        <div className='w-[600px] mx-auto p-2 rounded-lg border-2 border-gray-200 dark:border-slate-400 dark:shadow-lg dark:shadow-slate-400' >
          
          <div className='flex justify-center'>
            <i className='bi bi-cart text-6xl text-emerald-400'></i>
          </div>
  
          <div className='flex flex-col mt-4'>
            <p className='text-center'>oops your cart looks empty !</p>
            <p className='text-center'>Add books to your cart from our collection</p>
        
            <div className='flex justify-center my-6'>
              <Link className='px-2 py-1 rounded-lg text-white bg-green-400 hover:scale-110 hover:bg-green-600' to='/products'>Continue Shopping <i className='bi bi-cart'></i></Link>
            </div>
          </div>
          
        </div>
      </>
    )
  }