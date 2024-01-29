import { createContext, useState } from "react";

export const ModalContext = createContext()

export const ModalContextProvider = ({children}) => {
  const [loginModalOpen, setLoginModalOpen] = useState(false) 

  return (
    <ModalContext.Provider value={{loginModalOpen, setLoginModalOpen}}>
        {children}
    </ModalContext.Provider>
  )

}