import React from 'react';
import { useCart } from "../../stateManagement";
import { CartList } from "./components/CartList";
import { EmptyList } from "./components/EmptyList";

export const CartPage = () => {
  const { list } = useCart()

  return (
    <>
        <main>
          {list? <CartList cartData={list}/>: <EmptyList/>}
        </main>
    </>
  )
}

