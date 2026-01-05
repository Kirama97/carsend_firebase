import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const ProtectionRoute = ({role , children}) => {



 const { user, loading } = useAuth();

  if (loading) return <p>Chargement...</p>; 
  if (!user) return <Navigate to="/connexion" replace />;
  if (user.role !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children ;
}

export default ProtectionRoute
