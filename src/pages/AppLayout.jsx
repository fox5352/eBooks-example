import React from 'react'
import { Header } from '../components/Header';
import AllRoutes from "../routes/AllRoutes";

const AppLayout = () => {
  return (
    <>
      <Header />
      <AllRoutes />
    </>
  )
}

export default AppLayout