
import React, { useEffect, useState } from 'react'

import { DashboardEmpty } from "./components/DashboardEmpty";
import { DashboardCard } from './components/DashboardCard';
import { getUserOrder, useTitle } from "../../hooks";
import { Footer } from "../../components";



export const Dashboard = () => {
  const [list, setList] = useState([])
  useTitle("Dashboard")

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
    <>
      <main className='mb-6'>
        <h2 className='my-6 text-center text-3xl underline underline-offset-4'>My Dashboard</h2>
        {list.length === 0 &&  <DashboardEmpty />}
        {list.length > 0 && list.map(mapper)}
      </main>
      <Footer />
    </>
  )
}