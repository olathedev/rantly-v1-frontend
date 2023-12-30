import React from 'react'

function Nav() {
  return (
    <div className='navbar'>
        <div className="hidden container my-6 mx-auto md:flex justify-between items-center md:px-10">

            <div className='navbar-brand text-3xl font-ws font-semibold text-gray-900'>Rantly</div>

            <div className='nav-links flex gap-5 text-xl font-mont items-center'>
                <div>about</div>
                <div>FAQ</div>
                <div>contact dev</div>
            </div>

            <div className='button'>
              <button className="bg-primary text-white text-xl font-mont py-3 px-6 rounded-lg">start ranting</button>
            </div>

        </div>

        {/* mobile */}

        <div className="container my-6 mx-auto px-6 flex justify-between items-center md:hidden">

            <div className='navbar-brand text-3xl font-ws font-semibold text-gray-900'>Rantly</div>

            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            </div>
          </div>
    </div>
  )
}

export default Nav