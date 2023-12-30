import React from 'react'
import DashboardNav from '../components/dashboardcomps/DashboardNav'
import { Route, Routes } from 'react-router-dom'
import User from '../pages/User'
import Rants from '../pages/Rants'

function Dashboard() {
  return (
        <div>
            <DashboardNav />

            <Routes>
                <Route path='user' element={<User />} />
                <Route path='rants' element={<Rants />} />
            </Routes>
        </div>
    )
}

export default Dashboard