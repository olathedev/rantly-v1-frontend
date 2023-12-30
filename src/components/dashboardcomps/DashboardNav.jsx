import React from 'react'
import userimg from '../../assets/userimg.jpg'
import { Link } from 'react-router-dom'


function DashboardNav() {
  return (
    <div className='w-full bg-[#040406] '>
      <div className='container mx-auto px-8 flex justify-between py-4'>
        <Link to='/dashboard/user' className="text-white text-2xl font-ws font-semibold">Rantly</Link>
        <div className='flex gap-6 items-center font-mont text-xl text-white'>
          {/* <h4>Dashboard</h4> */}
          <Link to='/dashboard/rants'>
          <div className='ml-4 py-1 px-1 bg-white rounded-full border-4 border-primary text-primary'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
          </div>
          </Link>
          <div className='className flex items-center gap-2'>
            <img className='h-10 w-10 rounded-full border-4 border-primary' src={userimg} alt="" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardNav