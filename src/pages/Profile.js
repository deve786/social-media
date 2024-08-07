import React, { useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ProfilePost from '../components/ProfilePost'
import LeftSection from '../components/LeftSection'
import Suggest from '../components/Suggest'

function Profile( {setFriend,friend,suggest,setSuggest}) {
  
  return (
    <div className='p-3 flex  justify-between overflow-hidden h-screen md:gap-2  sm:flex sm:flex-row gap-2'>
        <div ><LeftSection friend={friend} setSuggest={setSuggest} suggest={suggest} /></div >
        <div className='flex flex-col gap-3 flex-1 overflow-y-scroll h-screen no-scrollbar'>
            <ProfileHeader/>
            <ProfilePost />
        </div>
        <Suggest setFriend={setFriend} friend={friend}/>
    </div>
  )
}

export default Profile