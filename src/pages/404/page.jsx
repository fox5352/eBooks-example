import React from 'react'
import { useLocation } from 'react-router-dom'

export const NotFound = () => {
  const { pathname } = useLocation()

  return (
    // TODO: style later
    <main>
      <div className='w-3/5 px-6 mx-auto rounded-lg text-center'>
        <h2 className='text-xl animate-wave' ><span className='text-amber-500 tracking-widest'>404</span> </h2>
        <h1 className='text-3xl my-4'>{pathname.slice(1,)}</h1>
        <h2>not found</h2>
      </div>
    </main>
  )
}
