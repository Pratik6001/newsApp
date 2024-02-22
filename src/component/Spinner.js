import React, {} from 'react'
import loading from '/react_js/newsapp/src/loading.gif'
const Spinner =()=> {
  
    return (
      <div className="text-center">
        <img src={loading} alt="loading" />
      </div>
    )
}


export default Spinner