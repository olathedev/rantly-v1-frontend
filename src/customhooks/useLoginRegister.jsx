import React, { useState } from 'react'
import axios from 'axios'

export default function useLoginRegister() {
    const [isPending, setIsPending] = useState(false)

    const register = async (firstname, lastname, username, password) => {
            setIsPending(!isPending)
            try {
                const result = axios.post('auth/register', {
                    firstname, lastname, username, password
                })
                setIsPending(false)
                console.log(result);
            } catch (error) {
                setIsPending(false)

                console.log(error);
            }
    }

    const login = async (username, password) => {
        
    }

    return {register, isPending}
}
