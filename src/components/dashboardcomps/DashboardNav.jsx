import React from 'react'
import userimg from '../../assets/userimg.jpg'
import { Link } from 'react-router-dom'


function DashboardNav() {
  return (
    <div className='w-full border-b sticky top-0 z-30 bg-white'>
      <div className='container mx-auto px-4 flex justify-between items-center py-4'>
        <div className="navbrand flex items-center gap-3">
        
        <div className="flex md:hidden mr-3 text-primary">
        <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-8 h-8}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
        </div>
        
          <Link to='/dashboard/user' className="text-primary text-2xl font-ws font-semibold">Rantly</Link>
        </div>
        
        <div className='flex items-center gap-10 font-pop'>
          <div>
            <Link to='/dashboard/rants'>
              <button className='py-3 px-3 bg-gray-300 rounded text-slate-900 font-semibold font-pop hidden md:flex'>Messages</button>
            </Link>
          </div>
          <div className='className flex items-center gap-2'>
            <div className="flex flex-col text-center text-sm font-semibold">
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