import { createBrowserRouter, Routes, Route , RouterProvider } from 'react-router-dom'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import React from 'react'
import Navbar from './composants/User/navbar/Navbar';
import AdminPage from './pages/adminPage/AdminPage'
import UserPage from './pages/usePage/UserPage';
import SuperAdminPage from './pages/superAdminPage/SuperAdminPage';
import ProtectionRoute from './Route/ProtectionRoute'
import NotFoundPage from './pages/NotFoundPage'
import UserHome from './pages/usePage/UserHome'
import AdminHome from './pages/adminPage/AdminHome';
import SuperHome from './pages/superAdminPage/superHome'
import CarProvider from './context/CarProvider';






const router = createBrowserRouter( [

    // { path: "/", element: <Home /> },
    { path: "/", element: <Login /> },
    { path: "/connexion", element: <Login /> },
    { path: "/inscription", element: <Register /> },
    { path: "*", element: <NotFoundPage /> },
    

    {
      path: "/",
      element: (
        <ProtectionRoute allowedRoles={["UTILISATEUR_STANDARD"]}>
          <UserPage />
        </ProtectionRoute>
      ),
      children: [
        { path: "accueil", element: <UserHome /> },
        // { path: "historique", element: <Historique /> },
        // { path: "profil", element: <Profil /> },
      ],
    },
  {
      path:"/admin",
      element : (
        <ProtectionRoute  allowedRoles={["ADMIN", "SUPERADMIN"]}>
            <AdminPage/>
        </ProtectionRoute>
      ),
      children : [
        { path: "home", element: <AdminHome /> },
        // { path: "utilisateur", element: <Utilisateurs /> },
        // { path: "profil", element: <Profil_admin /> },
      ]

    },
    {
    path: "/superadmin",
    element: (
      <ProtectionRoute allowedRoles={["SUPERADMIN"]} >
        <SuperAdminPage />
      </ProtectionRoute>
    ),
    children: [
      { path: "home", element: <SuperHome /> },
      // { path: "admins", element: <GestionAdmins /> },
    ],
  }

])

function App() {
  return (
        <CarProvider>
           <RouterProvider router={router} />
       </CarProvider>
  )

  
 
         
  }

export default App
