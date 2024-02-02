import React from 'react'
import DashboardNav from '../components/dashboardcomps/DashboardNav'

export default function NotFound() {
  return (
    <div className=''>
      <DashboardNav />
        <div className="h-screen container mx-auto flex items-center justify-center">
            <h1 className="text-2xl font-rale">404-PAGE NOT FOUND</h1>
        </div>
    </div>
  )
}
  