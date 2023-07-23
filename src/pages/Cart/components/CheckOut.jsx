import React, { useRef, useEffect, useState } from 'react'
import { useCart } from "../../../stateManagement";
import { InputBlock } from "../../../components";
import { useNavigate } from 'react-router-dom';

export const CheckOut = ({state, func, ...props}) => {
  const { clear_cart, total } = useCart()
  const { link } = useNavigate()
  const menuRef = useRef()
  const [formData, setFormData] = useState({
      name: null,
      email: null,
      cardNumber: null,
      expiryDate: null,
      code: null
  })  

  useEffect(() => {
    if (state) {
      menuRef.current.classList.remove('scale-0')
      menuRef.current.classList.add('scale-100')
    }else{
      menuRef.current.classList.remove('scale-100')
      menuRef.current.classList.add('scale-0')
    }

  }, [menuRef, state])

  const submit = async (e) => {
    e.preventDefault()
    
    setFormData({
      name: null,
      email: null,
      cardNumber: null,
      expiryDate: null,
      code: null
    })
    clear_cart()
    link('/dashboard')
  } 

  return (
    <div className='scale-0 fixed top-0 left-1/2 my-20 overflow-y-auto -translate-x-1/2 z-20 w-[400px] max-h-[85vh] shadow-lg rounded-lg bg-white text-black dark:bg-zinc-600 dark:text-white transition-all duration-300 ease-in' ref={menuRef}>
        <form className='flex flex-col px-4 py-6'onSubmit={submit}>
            <div className='flex justify-end'>
                <i className='bi bi-arrow-right' onClick={func}></i>
            </div>

            <fieldset className='p-2 rounded-lg border-2 border-neutral-400 dark:border-slate-500'>
                <legend className='ml-4 text-xl px-1'>CheckOut</legend>
                <InputBlock type='text' label='Name' name='name' state={formData.name} func={setFormData} />
                <InputBlock type='email' label='Email' name='email' state={formData.email} func={setFormData} />
                <InputBlock type='text' label='Car Number' name='cardNumber' state={formData.cardNumber} func={setFormData} />
                <InputBlock type='date' label='Expiry Data' name='expiryDate' state={formData.expiryDate} func={setFormData} />
                <InputBlock type='text' label="Security Code" name='code' state={formData.code} func={setFormData} />
                <div className='flex py-2 justify-center'>
                    <i className='text-xl'>R {total}</i>
                </div>
            </fieldset>
            <div className='flex justify-center px-1'>
                <button className='px-2 py-1 mt-2 rounded-md bg-green-400 hover:bg-[crimson]' type='submit'><i class='bi bi-lock'></i> Pay now</button>
            </div>
        </form>
    </div>
  )
}
