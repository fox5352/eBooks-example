import React, { useEffect, useState } from 'react'
import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFailed } from "./components/OrderFailed";
import { useLocation } from 'react-router-dom';


export const OrderPage = () => {
  const { state } = useLocation()

  return (
    <main>
      {state.status? <OrderSuccess order={state.orderData}/>: <OrderFailed />}
    </main>
  )
}
