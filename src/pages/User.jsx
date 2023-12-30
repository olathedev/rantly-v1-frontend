import React from 'react'
import Nav from '../components/Nav'
import LinkAlert from '../components/dashboardcomps/LinkAlert'

function User() {
  return (
    <div className='mt-10 container mx-auto px-8'>
      <div className="text-2xl font-semibold font-mont text-gray-800"><span className="text-primary">Hi, Mike! </span>Welcome to your rants Dashboard</div>
   
      <div className='mt-5 md:hidden'>
        <LinkAlert />
      </div>
    </div>
  )
}

export default User