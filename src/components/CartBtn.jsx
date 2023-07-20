import React from 'react'

export const CartBtn = ({...props}) => {
  const inCart = false
  const style = inCart? 'bg-rose-500 hover:bg-rose-600': "bg-sky-500 hover:bg-sky-600"

  const clickHandler = (e) => {
    e.stopPropagation() 
  }

  return (
    <button className={`px-1.5 py-1.5 rounded-lg text-white ${style}`} onClick={clickHandler}>{inCart? "remove from cart":"Add to cart"}</button>
  )
}
