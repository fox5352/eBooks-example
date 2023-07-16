import React from 'react'
import { Route, Routes } from "react-router-dom";
import { HomePage } from '../pages';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} end/>
    </Routes>
  )
}

export default AllRoutes