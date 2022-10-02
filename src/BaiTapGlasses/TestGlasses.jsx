import React from 'react'

const TestGlasses = ({ glass }) => {
  
    if (!glass){
        return null;
    }
  
    return (
    <div>
       <img className='img-test' src={glass.url} alt={glass.name} width='140px'/>
        
    </div>
  )
}

export default TestGlasses