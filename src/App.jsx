import { createBrowserRouter, Routes, Route , RouterProvider } from 'react-router-dom'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Home from './pages/home/Home'
import CarProvider from './context/CarProvider'
import React from 'react'
import Navbar from './composants/navbar/Navbar';
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage';
import SuperAdminPage from './pages/SuperAdminPage';
import ProtectionRoute from './Route/ProtectionRoute'







const router = createBrowserRouter( [

    { path: "/", element: <Home /> },
    { path: "/connexion", element: <Login /> },
    { path: "/inscription", element: <Register /> },
    { path: "*", element: <NotFoundPage /> },
    

    {
      path: "/dashboard",
      element: (
        <ProtectionRoute role="UTILISATEUR_STANDARD">
          <UserPage />
        </ProtectionRoute>
      ),
      children: [
        // { path: "accueil", element: <HomeDash /> },
        // { path: "historique", element: <Historique /> },
        // { path: "profil", element: <Profil /> },
      ],
    },
  {
      path:"/admin",
      element : (
        <ProtectionRoute role="ADMIN">
            <AdminPage/>
        </ProtectionRoute>
      ),
      children : [
        // { path: "home", element: <HomeDash_admin /> },
        // { path: "utilisateur", element: <Utilisateurs /> },
        // { path: "profil", element: <Profil_admin /> },
      ]

    },
    {
    path: "/superadmin",
    element: (
      <ProtectionRoute role="SUPERADMIN">
        <PageSuperAdmin />
      </ProtectionRoute>
    ),
    children: [
      { path: "home", element: <HomeDash_super /> },
      { path: "admins", element: <GestionAdmins /> },
    ],
  }

])

function App() {
  return <CarProvider>
          <RouterProvider router={router} />
         </CarProvider>
  }

export default App
