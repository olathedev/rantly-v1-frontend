import React from 'react'
import userimg from '../../assets/userimg.jpg'
import { Link } from 'react-router-dom'


function DashboardNav() {
  return (
    <div className='w-full border-b sticky top-o z-20'>
      <div className='container mx-auto px-4 flex justify-between items-center py-4'>
        <Link to='/dashboard/user' className="text-primary text-2xl font-ws font-semibold hidden md:flex">Board</Link>
        <div className='flex gap-6 items-center font-mont'>
          {/* <h4>Dashboard</h4> */}
          <Link to='/dashboard/rants'>
            <button className='py-3 px-3 bg-slate-950 rounded text-white font-pop'>messages</button>
          </Link>
          <div className='className flex items-center gap-2'>
            <div className="flex flex-col text-center text-sm font-semibold">
              <div>oladev</div>
              <div>user</div>
            </div>
            <img className='h-12 w-12 rounded-full border-2 border-primary' src={userimg} alt="" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary font-bold">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardNav