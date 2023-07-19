import React from 'react'
import { Route, Routes } from "react-router-dom";
import { HomePage } from '../pages';
import { ProductsList } from '../pages/Products/ProductsList';
import { ProductDetail } from "../pages/Products/ProductDetail";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} end/>
        <Route path='/products' element={<ProductsList />} end/>
        <Route path='/product/:id' element={<ProductDetail /> } end/>
    </Routes>
  )
}

export default AllRoutes