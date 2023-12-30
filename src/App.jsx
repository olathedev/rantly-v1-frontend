import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import User from './pages/User'
import Dashboard from './layouts/Dashboard'
import SendRant from './pages/SendRant'


function App() {

  return (
    <div>

      <Routes>
        <Route index path='/' element={<LandingPage />} />
        <Route path="/r/*" element={<SendRant />} />  
    
        <Route path="/dashboard/*" element={<Dashboard />} />  
        
      </Routes>
      
    </div>
    )
}

export default App
