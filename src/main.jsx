import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { MessagesContextProvider } from './context/MessagesContext.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <AuthContextProvider>
    <MessagesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </MessagesContextProvider>
    </AuthContextProvider>


  </React.StrictMode>,
)
