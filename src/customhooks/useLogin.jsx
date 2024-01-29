import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useAuthContext } from './useAuthContext'
import { ModalContext } from '../context/ModalContext'

export const useLogin = () => {

    const [isPending, setIsPending] = useState(false)
    const {loginModalOpen, setLoginModalOpen} = useContext(ModalContext)
    const {dispatch} = useAuthContext()

    const login = async (username, password) => {
        setIsPending(true)
        try {
            const {data} = await axios.post('auth/login', {
                username, password
            })
            setIsPending(false)
            console.log(data);  

            localStorage.setItem('user', JSON.stringify(data))
            dispatch({type: 'LOGIN', payload: data})
            setLoginModalOpen(false)

        } catch (error) {
            setIsPending(false)
           console.log(error.response);
        }
    }

    return {login, isPending}
}

