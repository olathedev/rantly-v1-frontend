import React from 'react'
import { Link } from 'react-router-dom'

function ErrorAlert({error, err, ok, success}) {
  return (
    <div className="px-4">
        <div className="bg-white py-4 rounded-lg shadow-lg text-center border-b-3 border-primary">

            <div className="mb-6 pb-4 border-b-2 px-12 border-secondary text-primary text-lg font-ws font-semibold">{success ? ok : err}</div>

            <div className="px-6 text-lg font-mont font-semibold py-6">
            
                <p className='mb-6'>{error ? error : success} </p>

            <Link to="/" className="py-3 px-3 mt-4 bg-secondary text-white rounded-md">Go to home</Link>
            </div>
        </div>
    </div>
  )
}

export default ErrorAlert