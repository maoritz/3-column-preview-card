import React from 'react'

const Service = (props) => {
  return (
    <div className='service' style={{backgroundColor:props.color}}>
      <img src={`icon-${props.name}.svg`} alt="icon" />
      <h2>{props.name}</h2>
      <p>{props.text}</p>
      <button style={{color:props.color}}>
        Learn more
      </button>
    </div>
  )
}

export default Service