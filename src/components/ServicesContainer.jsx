import React from 'react'
import Service from './Service';
import carTypes from '../database'

export const ServiceContainer = () => {

  

  return (
    <div className='services-container'>
      {carTypes.map(carType => {
       return  <Service 
                  color={carType.color} 
                  text={carType.text} 
                  name={carType.name}
                  key={carType.id}
                />
      })}
    </div>
  )
}

export default ServiceContainer;