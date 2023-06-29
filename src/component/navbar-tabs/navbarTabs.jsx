import React from 'react'
import './navbarTabs.css'
function NavbarTabs(props) {
  return (
    <a className='navbar-tabs'>
       { props.icon ? <props.icon className="navbar-icon"/> : ""}
    </a>
  )
}

export default NavbarTabs 