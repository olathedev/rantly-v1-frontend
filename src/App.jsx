import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Nav from './components/Nav'
import { ModalContextProvider } from './context/ModalContext'
import Dashboard from './layouts/Dashboard'
import SendRant from './pages/SendRant'
import axios from 'axios'



axios.defaults.baseURL = 'https://rantly-v1-api.cyclic.app/api/v1/'
// axios.defaults.baseURL = import.meta.env.API_URL



function App() {

  return (
    <div>

      <Routes>
        <Route index path='/' element={
          <ModalContextProvider>
              <LandingPage />
          </ModalContextProvider>
        } />
        <Route path="/r/:username" element={<SendRant />} />  
        <Route path="/dashboard/*" element={<Dashboard />} />  
      </Routes>
      
    </div>
    )
}

export default App
