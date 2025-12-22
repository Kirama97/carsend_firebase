import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/auth/Register'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import Home from './pages/home/Home';



function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <BrowserRouter>
        <Routes>
           {/* <Route path='/' element={<Home/>} /> */}
           <Route path='/' element={<Register/>} />
       
          
        </Routes>
      </BrowserRouter>
 
    </>
  )
}

export default App
 