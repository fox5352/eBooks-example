import React from 'react'
import { Header } from '../components/Header';
import AllRoutes from "../routes/AllRoutes";

const AppLayout = () => {
  return (
    <div class="text-black dark:text-white dark:bg-zinc-700">
      <Header />
      <AllRoutes />
    </div>
  )
}

export default AppLayout