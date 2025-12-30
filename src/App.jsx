import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Home from './pages/home/Home'
import CarProvider from './context/CarProvider'
import React from 'react'
import Navbar from './composants/navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
       <CarProvider>
         <Navbar/>
        <Routes>
          
          <Route path="/accueil" element={<Home/>} />
          <Route path="/inscription" element={<Register />} />
          <Route path="/" element={<Login />} />
        
        </Routes>
       </CarProvider>
    </BrowserRouter>
  )
}

export default App
