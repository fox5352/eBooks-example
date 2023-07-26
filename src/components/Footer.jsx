import React from 'react'

export const Footer = () => {
  return (
    // make nicer
    <footer className='flex align-middle justify-between w-3/4 mx-auto px-2 py-4 border-[1px] border-neutral-300 rounded-lg shadow-lg dark:border-slate-400 dark:shadow-slate-500'>
      <div className='flex'>
        <p className='flex items-center'>{new Date().getFullYear() } CodeBooks example. All Rights Reserved</p>
      </div>

      <div className='flex space-x-2 pr-2'>
        <a className='hover:text-rose-500 hover:dark:text-slate-400' href='https://github.com/fox5352' target='_blank' rel='noreferrer'>GitHub <i className='bi bi-github'></i></a>
        <a className='hover:text-rose-500 hover:dark:text-slate-400' href='https://www.linkedin.com/in/christopher-vos-6469b7284' target='_blank' rel='noreferrer'>linkedIn <i className='bi bi-linkedin'></i></a>
      </div>
    </footer>
  )
}
