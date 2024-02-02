import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import { ModalContextProvider } from './context/ModalContext'
import SendRant from './pages/SendRant'
import axios from 'axios'
import { useAuthContext } from './customhooks/useAuthContext'
import Footer from './components/Footer'
import User from './pages/User'
import Rants from './pages/Rants'
import NotFound from './pages/NotFound'
import Metas from './Metas'
// import DashboardNav from './components/dashboardcomps/DashboardNav'



axios.defaults.baseURL = 'https://rantly-v1-api.cyclic.app/api/v1/'
// axios.defaults.baseURL = 'http://localhost:4000/api/v1'



function App() {

  const {user} = useAuthContext()

 

  return (
    <div className=''>

      <Metas />

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
        <Route path='*' element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </div>
    )
}

export default App
