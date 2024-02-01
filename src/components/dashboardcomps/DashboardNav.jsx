import React from 'react'
import userimg from '../../assets/userimg.jpg'
import { Link } from 'react-router-dom'
import { useLogout } from '../../customhooks/useLogout'


function DashboardNav() {

    const {logout} = useLogout()

  return (
    <div className='w-full border-b sticky top-0 z-30 bg-white'>
      <div className='container mx-auto px-4 flex justify-between items-center py-4'>
        <div className="navbrand flex items-center gap-3">
        
          <Link to='/board' className="text-primary text-2xl font-ws font-semibold">Rantly</Link>
        </div>
        
        <div className='flex items-center gap-10 font-pop'>
          <div className='flex gap-3 items-center'>
            <Link to='/board/rants'>
              <button className='py-3 px-3 bg-gray-300 rounded text-slate-900 font-semibold font-pop hidden md:flex'>Messages</button>
            </Link>

              <button className='py-3 px-3 bg-primary rounded text-white font-semibold font-pop hidden md:flex' onClick={logout}>logout</button>
        
          </div>
          
          <div className='className items-center gap-2 px-2 hidden'>
            <div className="hidden md:flex flex-col text-center text-sm font-semibold">
              <div>oladev</div>
              <div>user</div>
            </div>
            <img className='h-10 w-10 rounded-full border-2 border-primary' src={userimg} alt="" />
           

          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardNav