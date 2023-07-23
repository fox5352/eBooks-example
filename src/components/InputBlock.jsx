import React from 'react'

export const InputBlock = ({type,label, state, name, func}) => {

  const updateData = (e) => {
    func(prev=>{return {  ...prev, [name]: e.target.value }})
  }

  return (
    <div className='flex flex-col p-1'>
        <label className='mb-1' htmlFor={label}>{label}</label>
        <input className='rounded-md px-1 border-2 border-neutral-300 outline-none dark:text-black' type={type} id={label} value={state} onChange={updateData}/>
    </div>
  )
}
