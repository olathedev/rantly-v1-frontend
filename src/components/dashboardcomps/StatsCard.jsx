import React from 'react'
import { MdMail, MdOutlineArrowDropDown } from 'react-icons/md'

export default function StatsCard({title, value, path}) {
    return (
        <div className='mt-10'>
            <div className="bg-white border border-b-2 border-b-slate-950 shadow-lg px-6 py-4 gap-3 rounded-md">
                <h4 className='font-pop mb-2'>{title}</h4>
                <h1 className='text-3xl font-rale font-bold mb-4'>{value}</h1>

                <div className="flex justify-between items-center">
                    <button className='py-1 px-2 bg-slate-950 text-white font-bold rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>

                    </button>

                    <div className="bg-primary bg-opacity-20 p-3 text-primary rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>

                    

                    </div>

                </div>

            </div>
        </div>
    )
}
