
import React, { useEffect, useState } from 'react'

import { DashboardEmpty } from "./components/DashboardEmpty";
import { DashboardCard } from './components/DashboardCard';
import { getUserOrder } from "../../hooks";


export const Dashboard = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    getUserOrder()
      .then(res=>setList(res))
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