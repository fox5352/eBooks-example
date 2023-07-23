import React from 'react';
import { useCart } from "../../stateManagement";
import { CartList } from "./components/CartList";
import { EmptyList } from "./components/EmptyList";

export const CartPage = () => {
  const { list, total } = useCart()

  return (
    <>
        <main>
          {list.length > 0 ? <CartList cartData={list} total={total} />: <EmptyList/>}
        </main>
    </>
  )
}

