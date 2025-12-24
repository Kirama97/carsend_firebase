import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/connexion" element={<Login />} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
