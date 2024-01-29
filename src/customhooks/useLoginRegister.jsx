import React, { useState } from 'react'
import axios from 'axios'
import { useAuthContext } from './useAuthContext'
import { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'

export default function useLoginRegister() {
    const [isPending, setIsPending] = useState(false)
    const [success, setSuccess] = useState(false)

    // const {loginModalOpen, setLoginModalOpen} = useContext(ModalContext)

    const register = async (firstname, lastname, username, password) => {
            setIsPending(true)
            try {
                const response = await axios.post('auth/register', {
                    firstname, lastname, username, password
                })
                setIsPending(false)
                setSuccess(true)
                console.log(response.data, response.status);
            } catch (error) {
                setIsPending(false)
                console.log(error);
            }
    }

  

    return {register, isPending, success}
}
