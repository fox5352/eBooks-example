import React from 'react'
import { Header } from '../components/Header';
import AllRoutes from "../routes/AllRoutes";
import { FilterProvider } from "../stateManagement";

const AppLayout = () => {
  return (
    <FilterProvider>
      <div class="text-black dark:text-white dark:bg-zinc-700">
        <Header />
        <AllRoutes />
      </div>
    </FilterProvider>
  )
}

export default AppLayout