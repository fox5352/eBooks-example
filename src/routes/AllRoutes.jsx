import React from 'react'
import { Route, Routes } from "react-router-dom";

import { HomePage, ProductDetail, ProductsList, CartPage, SignPage, NotFound, Dashboard, OrderPage } from '../pages';
import ProtectedRoute from './ProtectedRoute';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} end/>
        <Route path='/products' element={<ProductsList />} end/>
        <Route path='/product/:id' element={<ProductDetail /> } end/>
        <Route path='/login' element={<SignPage />} end/>
        <Route path='/register' element={<SignPage />} end/>

        <Route path='/cart' element={<ProtectedRoute> <CartPage /> </ProtectedRoute>} end/>
        <Route path='/dashboard' element={<ProtectedRoute> <Dashboard />  </ProtectedRoute>} end/>
        <Route path='/order-summary' element={<ProtectedRoute> <OrderPage />  </ProtectedRoute>} end/>

        <Route path='/*' element={<NotFound />} end />
    </Routes>
  )
}

export default AllRoutes