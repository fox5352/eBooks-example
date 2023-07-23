
import React, { useEffect, useState } from 'react'

export const Dashboard = () => {
  const [list, setList] = useState()
  const token = JSON.parse(sessionStorage.getItem('token'))
  const userID = JSON.parse(sessionStorage.getItem('cbid'))
  const fetchOps = {
    headers: { 'Content-Type': 'application/json',  Authorization: `Bearer ${token}`},
    method: 'GET', 
  }

  useEffect(() => {
    getOrders()
  }, [])

  const getOrders = async () =>{
    const res = await(await fetch(`http://localhost:8000/660/orders`, fetchOps)).json()
  } 

  console.log(list);

  return (
    <div>Dashboard</div>
  )
}
