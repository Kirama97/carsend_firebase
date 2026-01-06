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
import Reservation from './pages/usePage/Reservation';
import Parking from './pages/usePage/Parking';
import UserProfil from './pages/usePage/UserProfil';
import AuthProvider from './context/AuthProvider';







const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/connexion", element: <Login /> },
  { path: "/inscription", element: <Register /> },

  {
    path: "/",
    element: (
      <ProtectionRoute allowedRoles={["UTILISATEUR_STANDARD"]}>
        <UserPage />
      </ProtectionRoute>
    ),
    children: [
      { path: "accueil", element: <UserHome /> },
      { path: "profil", element: <UserProfil /> },
      { path: "reservations", element: <Reservation /> },
      { path: "parking", element: <Parking /> },
    ],
  },

  {
    path: "/admin",
    element: (
      <ProtectionRoute allowedRoles={["ADMIN", "SUPERADMIN"]}>
        <AdminPage />
      </ProtectionRoute>
    ),
    children: [
      { path: "home", element: <AdminHome /> },
    ],
  },

  {
    path: "/superadmin",
    element: (
      <ProtectionRoute allowedRoles={["SUPERADMIN"]}>
        <SuperAdminPage />
      </ProtectionRoute>
    ),
    children: [
      { path: "home", element: <SuperHome /> },
    ],
  },

  { path: "*", element: <NotFoundPage /> },
]);


function App() {
  return (
      
    <AuthProvider>
      <CarProvider>
        <RouterProvider router={router} />
      </CarProvider>
    </AuthProvider>
 
     
  )

  
 
         
  }

export default App
