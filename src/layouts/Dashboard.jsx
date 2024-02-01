import React from 'react'
import DashboardNav from '../components/dashboardcomps/DashboardNav'
import { Route, Routes } from 'react-router-dom'
import User from '../pages/User'
import Rants from '../pages/Rants'

function Dashboard() {
  return (
        <div className='bg-[#eee'>
            <DashboardNav />
        </div>
    )
}

export default Dashboard