import React from 'react';
import { useCart } from "../../stateManagement";
import { CartList } from "./components/CartList";
import { EmptyList } from "./components/EmptyList";
import { useTitle } from "../../hooks";

export const CartPage = () => {
  const { list, cartLen, total } = useCart()
  useTitle('Cart')  

  return (
    <>
        <main>
          {list.length > 0 ? <CartList cartData={list} cartLen={cartLen} total={total} />: <EmptyList/>}
        </main>
    </>
  )
}

