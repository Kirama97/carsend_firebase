import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Home from './pages/home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/accueil" element={<Home/>} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/" element={<Login />} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
