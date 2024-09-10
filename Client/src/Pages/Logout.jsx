import React from 'react'
import { Navigate } from 'react-router-dom'
export const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.removeItem("isAdmin");
  return (
   <Navigate to="/login"/>
  )
}

// export default Logo  ut