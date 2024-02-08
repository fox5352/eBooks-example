import React from 'react'
import { Header } from '../components/Header';
import AllRoutes from "../routes/AllRoutes";
import { FilterProvider, CartProvider, UserProvider } from "../stateManagement";

export default function AppLayout(){
  return (
    <UserProvider>
      <CartProvider>
        <FilterProvider>
          <div className="text-black dark:text-white dark:bg-zinc-700">
            <Header />
            <AllRoutes />
          </div>
      </FilterProvider>
    </CartProvider>
    </UserProvider>
  )
}