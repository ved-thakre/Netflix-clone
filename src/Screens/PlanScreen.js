import React from 'react'
import './PlanScreen.css'

function PlanScreen({planName, Description, pricing}) {
  return (
    <div className="second">
            <div className='sub__plans'>
                <h5 className='plan__title'>{planName} - <span className='plan__price'>{pricing}</span></h5>
                <h6 className='plan__description'>{Description}</h6>
            </div>
            <button>Subscribe</button>
    </div>    
  )
}

export default PlanScreen
