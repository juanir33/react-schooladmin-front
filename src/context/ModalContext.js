import React, { useState } from 'react'
import {createContext} from 'react'

export const ModalContext = createContext()

 const ModalProvider = ({children}) => {
    const [showN, setShowN] = useState(false);
    const [showE, setShowE] = useState(false);
    const [showH, setShowH] = useState(false);
    const [showR, setShowR ] = useState(false);
    const [id, setId] = useState('');

      
    const handleCloseN = () => setShowN(false);
    const handleShowN = () => setShowN(true);
    const handleCloseE = () => setShowE(false);
    const handleShowE = () => setShowE(true);
    const handleCloseH = () => setShowH(false);
    const handleShowH = () => setShowH(true);
    const handleCloseR = () => setShowR(false);
    const handleShowR = (e) => {
       setId(e.target.id);
       setShowR(true)
      console.log(id);};
       
  return (
      <ModalContext.Provider value={{showN, setShowN, handleCloseN, handleShowN,showE, setShowE, handleCloseE, showH, setShowH, setShowR, showR, handleShowE, handleCloseR, handleShowR, handleCloseH, handleShowH}}>
          {children}
      </ModalContext.Provider>
    
  )
}

export default ModalProvider;
