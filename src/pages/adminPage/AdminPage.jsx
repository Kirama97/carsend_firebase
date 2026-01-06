import React from 'react'
import NavAdmin from '../../composants/Admin/adminNavbar/NavAdmin';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

const AdminPage = () => {
  return (
    <div>
       <NavAdmin/>
       <Outlet></Outlet>
        <ToastContainer />
    </div>
  )
}

export default AdminPage
