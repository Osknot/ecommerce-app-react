import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
function App() {
  return(
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Auth" element={<Auth/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
      </Routes>
    </div>
  )
}

export default App
