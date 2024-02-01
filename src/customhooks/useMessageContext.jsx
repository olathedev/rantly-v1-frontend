import { useContext } from "react"
import { MessagesContext } from "../context/MessagesContext"

export const useMessageContext = () => {
    const context = useContext(MessagesContext)

    if(!context) throw Error("Message Context must be used inside Message provider")

    return context


}