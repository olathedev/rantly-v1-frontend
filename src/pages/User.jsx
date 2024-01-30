import React, { useId } from 'react'
import Nav from '../components/Nav'
import LinkAlert from '../components/dashboardcomps/LinkAlert'
import { useAuthContext } from '../customhooks/useAuthContext'
import StatsCard from '../components/dashboardcomps/StatsCard'

function User() {

    const id = useId()
  const stats = [
    { title: "Total Messages", value: "20", path: "/messages", icon: "mail"},
    { title: "Total Messages Today", value: "10", path: "/messages"},
    { title: "Your Bookmarks", value: "3", path: "/messages"},
    { title: "Total Bookmarks", value: "20", path: "/messages"},


    
  ]

  const {user} = useAuthContext()

  return (
    <div className='my-10 container mx-auto px-8'>
      <div className="text-2xl font-semibold font-rale text-gray-800"><span className="">Hi {user && user.username}, </span>Welcome to your rants Dashboard</div>
   
      <div className='mt-10 w-full md:max-w-[30%] flex items-center justify-center text-center md:justify-start'>
        <LinkAlert user = {user} />
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">

      {stats.map((stat, i) => (
        <StatsCard title={stat.title} value={stat.value} path={stat.path} key={i} />
      ))} 
      



      </div>
    </div>
  )
}

export default User