import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const token = JSON.parse(sessionStorage.getItem('token'))

  return token? children : <Navigate to='/login' end/>
}

export default ProtectedRoute