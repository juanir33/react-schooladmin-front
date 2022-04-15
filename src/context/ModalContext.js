

import React, { useState } from 'react'
import {createContext} from 'react'

export const ModalContext = createContext()

 const ModalProvider = ({children}) => {
    const [showN, setShowN] = useState(false);
    const [showE, setShowE] = useState(false);
      
    const handleCloseN = () => setShowN(false);
    const handleShowN = () => setShowN(true);
    const handleCloseE = () => setShowE(false);
    const handleShowE = () => setShowE(true);
  return (
      <ModalContext.Provider value={{showN, setShowN, handleCloseN, handleShowN,showE, setShowE, handleCloseE, handleShowE}}>
          {children}
      </ModalContext.Provider>
    
  )
}

export default ModalProvider;
