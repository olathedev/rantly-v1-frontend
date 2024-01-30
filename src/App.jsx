import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Nav from './components/Nav'
import { ModalContextProvider } from './context/ModalContext'
import Dashboard from './layouts/Dashboard'
import SendRant from './pages/SendRant'
import axios from 'axios'
import { useAuthContext } from './customhooks/useAuthContext'
import Footer from './components/Footer'



axios.defaults.baseURL = 'https://rantly-v1-api.cyclic.app/api/v1/'
// axios.defaults.baseURL = 'http://localhost:4000/api/v1'



function App() {

  const {user} = useAuthContext()

  return (
    <div>

      <div className='min-h-screen'>
      <Routes>
        <Route index path='/' element={
          <ModalContextProvider>
              <LandingPage />
          </ModalContextProvider>
        } />
        <Route path="/r/:username" element={<SendRant />} />  
        <Route path="/dashboard/*" element={user ? <Dashboard /> : <Navigate to="/" />} />  
      </Routes>
      </div>
      <Footer />
    </div>
    )
}

export default App
