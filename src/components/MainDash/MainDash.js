import React from 'react'



function MainDash({children}) {
  return (
    <div className="d-flex w-90 justify-content-between m-2">
        <div className="d-flex  ">
        {children}
        </div>
        <div className="d-flex  ">
        
        </div>
        

    </div>    
  )
}

export default MainDash