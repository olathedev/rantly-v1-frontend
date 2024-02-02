import React, { useState } from 'react'
import axios from 'axios'
import { useAuthContext } from './useAuthContext'
import { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'

export default function useLoginRegister() {
    const [isPending, setIsPending] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(null)


    // const {loginModalOpen, setLoginModalOpen} = useContext(ModalContext)

    const register = async (firstname, lastname, username, password) => {
            setError(null)
            if(!firstname || !lastname || !username || !password) {
                setError("Fill out All fields")
                return
            }

            setIsPending(true)
            try {
                const response = await axios.post('auth/register', {
                    firstname, lastname, username, password
                })
                setIsPending(false)
                setSuccess(true)
                console.log(response.data, response.status);
            } catch (error) {
                setError(error.response.data.msg)
                setIsPending(false)
                console.log(error.response);
            }
    }

  

    return {register, isPending, success, error}
}
