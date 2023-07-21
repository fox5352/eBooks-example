// TODO: this with animations

import React, { useRef } from 'react'

export const SearchBar = ({state}) => {
  const inputRef = useRef('')
  const search_bar = document.getElementById('search_bar')

  if (search_bar) {
    if (state) {
        search_bar.classList.remove('scale-0', 'h-0','-translate-y-[50vh]')
        search_bar.classList.add('-translate-y-[0px]')
    }else{
        search_bar.classList.remove('-translate-y-[0px]')
        search_bar.classList.add('scale-0', 'h-0','-translate-y-[50vh]')
    }
  }


  const Submit = (e) => {
    console.log(inputRef.current.value);
    inputRef.current.value = ''
    e.preventDefault()
  }

  return (
    <div id='search_bar' className='flex w-[50%] h-0 scale-0 -translate-y-[50vh] mx-auto my-4 pl-2 shadow-md shadow-neutral-500 rounded-md dark:shadow-slate-500 transition-all duration-500 ease-in-out'>
      <input className='flex-grow max-h-full px-1 outline-none rounded-l-md dark:bg-zinc-300 dark:text-black border-b-2 focus:border-green-300' type='text' ref={inputRef} />
      <button className='w-[44px] pr-2 py-1  rounded-r-md hover:bg-green-200 ' onClick={Submit}><i className='bi bi-search'></i></button>
    </div>
  )
}
