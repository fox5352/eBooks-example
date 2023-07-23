import React, { useEffect } from 'react'

export const OrderPage = () => {
  const [orderList, setOrderList] = useState()
  const token = JSON.parse(sessionStorage.getItem('token'))
  const userID = JSON.parse(sessionStorage.getItem('cbid'))

  useEffect(()=>{

  },[])

  return (
    <div>OrderPage</div>
  )
}
