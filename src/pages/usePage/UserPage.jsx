import React from 'react'
import Navbar from '../../composants/User/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import CarProvider from '../../context/CarProvider';



const UserPage = () => {

  const { user , loading}  = useAuth();
    if (loading) return <p>Chargement...</p>;
    if(!user) return <Navigate to="/connexion" replace />;
    if (user.role !== "UTILISATEUR_STANDARD") return <Navigate to="/unauthorized" replace />;
    

  return (
     <div className="">
            <Navbar/>
            <Outlet/>
     </div>
     
      
   
  )
}

export default UserPage
