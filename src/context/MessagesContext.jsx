import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import { useAuthContext } from "../customhooks/useAuthContext";

export const MessagesContext = createContext()

export const messagesReducer = (state, action) => {
    switch (action.type) {
        case "SET_MESSAGES":
            return {
                messages: action.payload
            }
        case "BOOKMARK_MESSAGE":
            return {
                bookmarked: [action.payload, ...state.bookmarked]
            }
        default:
            return state;
    }
}

export const MessagesContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(messagesReducer, {
        messages: null,
        bookmarked: null
    })

    console.log('messageState', state)

    return (
        <MessagesContext.Provider value={{...state, dispatch}}>
            {children}
        </MessagesContext.Provider>
    )

}