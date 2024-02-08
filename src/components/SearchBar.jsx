import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom";

export const SearchBar = ({state, toggleBar}) => {
  const search_bar = document.getElementById('search_bar')
  const redirect = useNavigate()
  const inputRef = useRef('')

  if (search_bar) {
    if (state) {
        search_bar.classList.remove('scale-y-0', '-translate-y-[50vh]')
        search_bar.classList.add('scale-y-100', '-translate-y-[0px]')
    }else{
        search_bar.classList.remove('scale-y-100', '-translate-y-[0px]')
        search_bar.classList.add('scale-y-0', '-translate-y-[50vh]')
    }
  }


  const Submit = (e) => {
    redirect(`/products?q=${inputRef.current.value}`)
    toggleBar()
    inputRef.current.value = ''
    e.preventDefault()
  }

  return (
    <div id='search_bar' className='flex w-[50%] scale-y-0 -translate-y-[50vh] mx-auto my-4 pl-2 shadow-md shadow-neutral-500 rounded-md dark:shadow-slate-500 transition-all duration-500 ease-in-out'>
      <input className='flex-grow max-h-full px-1 outline-none rounded-l-md dark:bg-zinc-300 dark:text-black border-b-2 focus:border-green-300' type='text' id='search_input' ref={inputRef} autoFocus />
      <button className='w-[44px] pr-2 py-1  rounded-r-md hover:bg-green-200 ' onClick={Submit}><i className='bi bi-search'></i></button>
    </div>
  )
}
