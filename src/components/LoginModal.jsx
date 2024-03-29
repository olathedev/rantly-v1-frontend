import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'
import axios from 'axios'

export default function LoginModal({ onClose }) {

   

    const [activeForm, setActiveForm] = useState('login')

    const handleActiveForm = (form) => {
       
        setActiveForm(form)
    }
   


    return (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-25  backdrop-blur-sm overflow-auto z-20 ' id='modalWrapper' >

            <div className="border-t-4 border-primary w-full min-h-screen bg-white pt-20 md:py-4 px-6 md:w-[500px] flex flex-col rounded md:min-h-0">

                <div className="place-self-start md:place-self-end cursor-pointer" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 hidden md:block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:hidden">
                        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                </div>


                <div className="content mt-24 md:mt-4">
                    <div className="header text-center mb-3">
                        <h1 className='text-2xl font-rale font-semibold'>Hey Buddy!</h1>
                        <h3 className='py-3 text-2xl font-rale text-primary font-semibold'>Sign in to your account</h3>
                    </div>
                    {activeForm === 'register' && (

                        <Register {...{ handleActiveForm }} />
                    )}

                    {activeForm === 'login' && (

                        <Login {...{handleActiveForm}} />
                    )}


                </div>

            </div>

        </div>
    )
}
