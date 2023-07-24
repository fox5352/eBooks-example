import React from 'react'
import { Header } from '../components/Header';
import AllRoutes from "../routes/AllRoutes";
import { FilterProvider, CartProvider } from "../stateManagement";

const AppLayout = () => {
  return (
    <CartProvider>
        <FilterProvider>
          <div className="text-black dark:text-white dark:bg-zinc-700">
            <Header />
            <AllRoutes />
          </div>
      </FilterProvider>
    </CartProvider>
  )
}

export default AppLayout