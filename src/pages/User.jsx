import React, { useEffect, useId, useState } from 'react'
import Nav from '../components/Nav'
import LinkAlert from '../components/dashboardcomps/LinkAlert'
import { useAuthContext } from '../customhooks/useAuthContext'
import StatsCard from '../components/dashboardcomps/StatsCard'
import DashboardNav from '../components/dashboardcomps/DashboardNav'
import { useFetch } from '../customhooks/useFetch'
import { useMessageContext } from '../customhooks/useMessageContext'

function User() {

  const id = useId()
  const stats = [
    { title: "Total Messages", value: "0", path: "/messages", icon: "mail"},
    { title: "Total Messages Today", value: "0", path: "/messages"},
    { title: "Your Bookmarks", value: "0", path: "/messages"},
    { title: "Total Bookmarks", value: "0", path: "/messages"},
  
  ]
  
  const {user} = useAuthContext()


  return (

    
<>
<DashboardNav />

    <div className='my-10 container mx-auto px-8 '>
      <div className="text-2xl font-semibold font-rale text-gray-800"><span className="">Hi {user && user.username}, </span>Welcome to your rants Board </div>
   

     <div className="flex flex-col  md:flex-col-reverse">
     <div className='mt-10 w-full md:max-w-[40%] text-center md:justify-start'>
        <LinkAlert user = {user} />
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">

      {stats.map((stat, i) => (
        <StatsCard title={stat.title} value={stat.value} path={stat.path} key={i} />
      ))} 
      

      </div>
     </div>

    </div>
    </>
  )
}

export default User