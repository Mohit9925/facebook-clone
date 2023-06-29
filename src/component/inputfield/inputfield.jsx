import React from 'react'
import './inputfield.css'
function Inputfield(props) {
  return (
    <div className='inputfield-wrapper'>
        <input type="text" className='inputfield' name={props.name} id={props.id} placeholder={props.placeholder}/>
    </div>
  )
}

export default Inputfield