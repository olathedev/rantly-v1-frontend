import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import axios from "axios"
import { useMessageContext } from "./useMessageContext"

export const useFetch = () => {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const {user, ready} = useAuthContext()
    const {dispatch} = useMessageContext()
    const getRants = async (url) => {
        setIsPending(true)
          console.log('Hello universe')
        try{
          const {data} = await axios.get(url, {
            headers: {
              'Authorization': `Bearer ${user.token}`
            }
          })
          console.log(data)
          setIsPending(false)
          dispatch({type: "SET_MESSAGES", payload: data})
        }catch(error){
          console.log(error.response)
          setError("An error occured")
          setIsPending(false)
          
        }
      }

      return { getRants, isPending, error }
}