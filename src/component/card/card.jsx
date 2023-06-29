import React from 'react'
import './card.css'
function Card(props) {
  return (
    <div className='card'> 
        {props.icon?<props.icon className="card-image"/>:""}
        <h4>{props.title}</h4>
    </div>
  )
}

export default Card