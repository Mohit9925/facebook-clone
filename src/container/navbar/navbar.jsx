import React from 'react'
import './navbar.css'
import  {ReactComponent as FacebookIcon} from '../../media/facebook-icons/facebook-logo.svg'
import Inputfield from '../../component/inputfield/inputfield'
import NavbarTabs from '../../component/navbar-tabs/navbarTabs'
import {ReactComponent as HomeIcon} from '../../media/facebook-icons/home-icon.svg'
import {ReactComponent as ShortsIcon} from '../../media/facebook-icons/facebook-shorts.svg'
import {ReactComponent as MarketStoreIcon} from '../../media/facebook-icons/market-store.svg'
import {ReactComponent as GroupIcon} from '../../media/facebook-icons/groups-icon.svg'
import {ReactComponent as MessangerIcon} from '../../media/facebook-icons/messenger-icon.svg'
import {ReactComponent as ProfileIcon} from '../../media/facebook-icons/profile-icon.svg'
import CircularNavbarIcon from '../../component/navbar-icon/circularNavbarIcon'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='box'>
            <FacebookIcon />
            <Inputfield name="dashboard-input-search" placeholder="Search Facebook"/>
        </div>
        <div className="box">
            <NavbarTabs icon={HomeIcon} />
            <NavbarTabs icon={ShortsIcon}/>
            <NavbarTabs icon={MarketStoreIcon}/>
            <NavbarTabs icon={GroupIcon}/>
        </div>
        <div className="box">
            <CircularNavbarIcon icon={MessangerIcon}/>
            <CircularNavbarIcon icon={MessangerIcon}/>
            <CircularNavbarIcon icon={MessangerIcon}/>
            <CircularNavbarIcon icon={ProfileIcon}/>
            
            
        </div>
        

    </div>
  )
}

export default Navbar