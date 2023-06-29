import React from 'react'
import './main.css'
import Card from '../../component/card/card'
import {ReactComponent as FriendsIcon } from '../../media/facebook-icons/friends-icon.svg'
import {ReactComponent as ProfileIcon } from '../../media/facebook-icons/profile-icon.svg'
import {ReactComponent as MemoriesIcon } from '../../media/facebook-icons/memories-icon.svg'
import {ReactComponent as SavedIcon } from '../../media/facebook-icons/saved-icon.svg'
import {ReactComponent as GroupsIcon } from '../../media/facebook-icons/groups-icon.svg'
import {ReactComponent as MarketStore } from '../../media/facebook-icons/market-store.svg'
function Main() {
  return (
    <div className="main">
        <div className="left-frame">
        <Card icon={ProfileIcon} title="Mohit Jain"/>
        <Card icon={FriendsIcon} title="Friends"/>
        <Card icon={MemoriesIcon} title="Memories"/>
        <Card icon={SavedIcon} title="Saved"/>
        <Card icon={GroupsIcon} title="Groups"/>
        <Card icon={MarketStore} title="Marketplace"/>
        </div>
        <div className="middle-frame">middle</div>
        <div className="right-frame">
            <Card icon={ProfileIcon}  title="John Smith"/>
        </div>

    </div>
  )
}

export default Main