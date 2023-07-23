import React, { useEffect, useRef, useState } from 'react'
import { useCart } from "../stateManagement";

export const CartBtn = ({props, disabled}) => {
  const { add_to_cart, remove_from_cart, list } = useCart()
  const [inCart, setInCart] = useState(false)

  useEffect(()=>{
    if (list.find(item => item.id === props.id)) {
      setInCart(true)
    }else{
      setInCart(false)
    }
  },[list])

  const clickHandler = (e) => {
    e.stopPropagation()
    inCart? remove_from_cart(props): add_to_cart(props)
  }

  return (
    <button className={`px-1.5 py-1.5 rounded-lg text-white ${inCart? 'bg-rose-500 hover:bg-rose-600': "bg-sky-500 hover:bg-sky-600"} disabled:bg-blue-100 disabled:hover:bg-blue-100 disabled:hover:cursor-not-allowed`} onClick={clickHandler} disabled={disabled}>{inCart? "remove from cart":"Add to cart"}</button>
  )
}
