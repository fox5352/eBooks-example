import React from 'react'
import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFailed } from "./components/OrderFailed";
import { useLocation } from 'react-router-dom';
import { useTitle } from "../../hooks";


export const OrderPage = () => {
  const { state } = useLocation()
  useTitle("Orders")

  return (
    <main>
      {state.status? <OrderSuccess order={state.orderData}/>: <OrderFailed />}
    </main>
  )
}
