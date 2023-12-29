import React from 'react'

function Nav() {
  return (
    <div className='navbar'>
        <div className="container my-4 mx-auto flex justify-between items-center">

            <div className='navbar-brand text-2xl font-semibold'>Rantly</div>

            <div className='nav-links flex gap-3 items-center'>
                <div>about</div>
                <div>FAQ</div>
                <div>contact dev</div>
            </div>

            <div className='button'>
                <button className='py-2 px-4 bg-green-600 rounded-md'>Get started</button>
            </div>

        </div>
    </div>
  )
}

export default Nav