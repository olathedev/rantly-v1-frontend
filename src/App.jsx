import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Nav from './components/Nav'
import { ModalContextProvider } from './context/ModalContext'
import Dashboard from './layouts/Dashboard'
import SendRant from './pages/SendRant'
import axios from 'axios'
import { useAuthContext } from './customhooks/useAuthContext'
import Footer from './components/Footer'
import User from './pages/User'
import Rants from './pages/Rants'
import { useMessageContext } from './customhooks/useMessageContext'
import { useFetch } from './customhooks/useFetch'



axios.defaults.baseURL = 'https://rantly-v1-api.cyclic.app/api/v1/'
// axios.defaults.baseURL = 'http://localhost:4000/api/v1'



function App() {

  const {user} = useAuthContext()

 

  return (
    <div>

      <div className='min-h-screen'>
      <Routes>
        <Route index path='/' element={!user ? (
          <ModalContextProvider>
              <LandingPage />
          </ModalContextProvider>) : <Navigate to={"/board"} />
        } />
        <Route path="/r/:username" element={<SendRant />} />  
        <Route path="/board" element={user ? <User /> : <Navigate to="/" />} /> 
        <Route path='/board/rants' element={user ? <Rants /> : <Navigate to="/" />} />
      </Routes>
      </div>
      <Footer />
    </div>
    )
}

export default App
