import React, { useState } from 'react'
import useLoginRegister from '../customhooks/useLoginRegister'
import tick from '../assets/tick.png'


export default function Register({ handleActiveForm }) {

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const {register, isPending, success} = useLoginRegister()

    const handleRegister = async (e) => {
        e.preventDefault()
        await register(firstname, lastname, username, password)

    }

    const [passwordVisibility, setPasswordVisibility] = useState(false)

    return (
        <div>
            <form onSubmit={handleRegister} className={`${!success ? 'flex': 'hidden'} flex-col gap-3`}>
                <div className="email flex flex-col gap-1 text-md font-mont">
                    <label htmlFor="username" className=''>Firstname</label>
                    <input type="text" className="py-3 px-3 border border-gray-600 rounded-md focus:border-secondary focus:outline-none" placeholder='John' value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="email flex flex-col gap-1 text-md font-mont">
                    <label htmlFor="username" className=''>Lastname</label>
                    <input type="text" className="py-3 px-3 border border-gray-600 rounded-md focus:border-secondary focus:outline-none" placeholder='Doe' value={lastname} onChange={(e) => setLastName(e.target.value)}  />
                </div>
                <div className="email flex flex-col gap-1 text-md font-mont">
                    <label htmlFor="username" className=''>Username</label>
                    <input type="text" className="py-3 px-3 border border-gray-600 rounded-md focus:border-secondary focus:outline-none" placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="email flex flex-col gap-1 text-md font-mont">
                    <label htmlFor="password" className=''>Password</label>

                    <div className='flex flex-col relative'>
                        <input type={passwordVisibility ? 'text' : 'password'} className="py-3 px-3 border border-gray-600 rounded-md focus:border-secondary focus:outline-none" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />

                        <div className='absolute right-3 top-3' onClick={() => setPasswordVisibility(!passwordVisibility)}>

                            {!passwordVisibility ? (


                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                                </svg>

                            )}
                        </div>

                        <div className="flex justify-end text-md text-secondary font-ws mt-2 cursor-pointer">Forgoten password?</div>
                    </div>
                </div>

                <div className="foot py-3 text-center">
                    <button className="py-3 px-4 bg-secondary rounded-md w-full text-white font-semibold text-lg font-pop" disabled={isPending}>
                    {isPending ? "loading..." : "Sign up"}
                    </button>

                    <div className='font-mont text-md mt-2'>Already have an account?<span className='text-primary cursor-pointer font-semibold' onClick={() => handleActiveForm('login')}>Sign in</span> </div>
                </div>


            </form>

                <div className={`${success ? 'flex': 'hidden'} justify-center items-center`}>
                    <div className='text-center flex flex-col gap-6'>
                   
                            <h3 className='text-xl font-rale font-semibold'>Yayy, Your rantly account is up</h3>
                            <button className="py-3 px-4 bg-primary rounded-md text-xl font-pop text-white text-semibold mt-3" onClick={() => handleActiveForm('login')}>Sign in</button>


                    </div>
                  
                </div>

        </div>
    )
}
