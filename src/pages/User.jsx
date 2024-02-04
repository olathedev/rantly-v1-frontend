import React, { useEffect, useId, useState } from 'react'
import Nav from '../components/Nav'
import LinkAlert from '../components/dashboardcomps/LinkAlert'
import { useAuthContext } from '../customhooks/useAuthContext'
import StatsCard from '../components/dashboardcomps/StatsCard'
import DashboardNav from '../components/dashboardcomps/DashboardNav'
import { useFetch } from '../customhooks/useFetch'
import { useMessageContext } from '../customhooks/useMessageContext'
import axios from 'axios'

function User() {
  const {dispatch, messages} = useMessageContext()

  const today = new Date().toLocaleDateString()

  const todaysMessages = messages?.filter(msg => new Date(msg.createdAt).toLocaleDateString() === today)

  const id = useId()
  const stats = [
    { title: "Total Messages", value: messages?.length, path: "/messages", icon: "mail"},
    { title: "Messages recieved Today", value:  todaysMessages?.length, path: "/messages"},
    { title: "Your Bookmarks", value: 0, path: "/messages"},
    { title: "Your Bookmarks", value: 0, path: "/messages"}

  
  ]
  
  const {user} = useAuthContext()

  const getData = async () => {
    setIsPending(true)
    console.log("useEffect working");
    try {
      const { data } = await axios.get(`/rantly/messages`, {
        headers: {
            'Authorization': `Bearer ${user.token}`
          }
      })
      console.log(data)
      setIsPending(false)
      dispatch({type: "SET_MESSAGES", payload: data.messages})
    } catch (error) {
      console.log(error)
      setError(error.message)
      setIsPending(false)

    }
  }


  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

useEffect(() => {
    getData()
  }, [dispatch])
  return (

    
<>
<DashboardNav />

    <div className='my-10 container mx-auto px-8 '>
      <div className="text-2xl font-semibold font-rale text-gray-800"><span className="">Hi {user && user.username}, </span>Welcome to your rants Board </div>
   
      {isPending && (
          <div className="flex h-screen justify-center items-center">
            <div className="text-xl font-mont">Loading data...</div>
          </div>
        )}

        {error && (
          <div className="flex h-screen justify-center items-center text-white">

            <div className="-mt-60 py-6 px-20 bg-red-500 text-center font-mont text-lg rounded-md">
              <div className="py-4">
                {error}
              </div>
            </div>
          </div>
        )}
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