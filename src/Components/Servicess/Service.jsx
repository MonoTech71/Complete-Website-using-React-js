import React, { useState} from 'react'

import serviceData from './serviceData';
import './Service.css';



const Service = () => {
const [state, setState] = useState(serviceData)
    
  return (
    <>
    <h1>Our Services</h1>
    <div className='main_container'>
      
        {state.map((item) => {

          return (
            
                <div className='details'>

                        <img src={item.image} />
                        <h3>{item.title}</h3>
                        <p>{item.info}</p>

                </div>

           
          )


        })}
        </div>

    </>
  )
}

export default Service