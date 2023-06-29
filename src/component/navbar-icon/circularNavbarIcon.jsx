import React from 'react'
import './circularNavbarIcon.css'
function CircularNavbarIcon(props) {
  
  return (
    <div className='circular-navbar-icon'>
      {props.icon ? <props.icon className="circular-icon-image"/>:""}
    </div>
  )
}

export default CircularNavbarIcon