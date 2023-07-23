
import React, { useEffect, useState } from 'react'

import { DashboardEmpty } from "./components/DashboardEmpty";
import { DashboardCard } from './components/DashboardCard';


export const Dashboard = () => {
  const [list, setList] = useState([])
  const token = JSON.parse(sessionStorage.getItem('token'))
  const userID = JSON.parse(sessionStorage.getItem('cbid'))

  useEffect(() => {
    const getOrders = async () =>{
      const res = await(await fetch(`http://localhost:8000/660/orders?user.id=${userID}`, {
        headers: { 'Content-Type': 'application/json',  Authorization: `Bearer ${token}`},
        method: 'GET', 
      })).json()
      setList(res)
    }

    getOrders()
  }, [])


  const mapper = ({carList, ...props}) => {
      return(
        <DashboardCard key={props.id} list={carList} order={props} />
      )
  }

  return (
    <main>
      <h2 className='my-6 text-center text-3xl underline underline-offset-4'>My Dashboard</h2>
      {list.length === 0 &&  <DashboardEmpty />}
      {list.length > 0 && list.map(mapper)}
    </main>
  )
}