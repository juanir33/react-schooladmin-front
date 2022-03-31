import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'

const Panel = () => {
   const titulo = <h1>Panel Principal</h1>


  return (
    <Dashboard children={titulo} />
  )
}

export default Panel