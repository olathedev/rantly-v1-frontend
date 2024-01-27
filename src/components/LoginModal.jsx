import React from 'react'

export default function LoginModal({loginModalOpen, onClose, setLoginModalOpen}) {

    const handleClose = (e) => {
        if(e.target.id === 'modalWrapper') onClose()
    }


  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-25  backdrop-blur-sm z-20' id='modalWrapper' onClick={handleClose}>
        
        <div className="border-t-4 border-primary w-full h-screen bg-white py-4 px-6 md:w-[500px] flex flex-col rounded md:h-auto">
           
           <div className="place-self-start md:place-self-end" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 hidden md:block">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:hidden">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
            </svg>


           </div>
           

            <div className="content mt-32 md:m-0">
                <div className="header text-center mb-6">
                    <h1 className='text-2xl font-ws font-semibold'>Hey Buddy!</h1>
                    <h3 className='py-3 text-xl font-ws text-secondary'>Sign in to your account</h3>
                </div>

                <form className='flex flex-col gap-4'>
                    <div className="email flex flex-col gap-1 text-md font-ws">
                        <label htmlFor="email" className=''>Email Adress</label>
                        <input type="text" className="py-3 px-3 border border-gray-600 rounded-md focus:border-secondary focus:outline-none" placeholder='sowepatricia@gmail.com' />
                    </div>

                    <div className="email flex flex-col gap-1 text-md font-ws">
                        <label htmlFor="email" className=''>Password</label>
                        <input type="password" className="py-3 px-3 border border-gray-600 rounded-md focus:border-secondary focus:outline-none" placeholder='Your password' />
                    </div>


                    <div className="foot py-3">
                        <button className="py-3 px-4 bg-secondary rounded-md w-full text-white font-semibold text-lg font-pop">Sign in</button>
                    </div>
                </form>
            </div>

        </div>
        
    </div>
  )
}
