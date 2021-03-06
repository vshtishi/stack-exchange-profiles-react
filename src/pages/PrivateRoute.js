import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const PrivateRoute = ({ children, ...rest }) => {
  const {isAuthenticated, user} = useAuth0()
  const isUser = true

  return isUser ? children : <Navigate to='/login'></Navigate>
}

export default PrivateRoute