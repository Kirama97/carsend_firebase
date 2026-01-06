import React from 'react'
import NavSuper from '../../composants/SuperAdmin/superNav/NavSuper';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

const SuperAdminPage = () => {
  return (
    <div>
       <NavSuper/>
       <Outlet />
       <ToastContainer />
    </div>
  )
}

export default SuperAdminPage
