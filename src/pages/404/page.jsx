import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useTitle } from "../../hooks";

export const NotFound = () => {
  const { pathname } = useLocation()
  useTitle("404")

  return (
    <main>
      <div className='w-3/5 px-6 mx-auto rounded-lg text-center'>
        <h2 className='text-xl animate-wave' ><span className='text-amber-500 tracking-widest'>404</span> </h2>
        <h1 className='text-3xl my-4'>{pathname.slice(1,)}</h1>
        <h2>not found</h2>
        <div className='mt-4'>
          <Link to='/' className='header-btn px-2 py-1.5 text-white bg-[crimson] dark:text-black dark:bg-slate-400 dark:hover:bg-slate-600'>Go Home</Link>
        </div>
      </div>
    </main>
  )
}
