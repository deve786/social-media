import React, { useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ProfilePost from '../components/ProfilePost'
import LeftSection from '../components/LeftSection'
import Suggest from '../components/Suggest'

function Profile() {
  
  return (
    <div className='p-3 flex  justify-between overflow-hidden h-screen md:gap-2  sm:flex sm:flex-row gap-2'>
        <div ><LeftSection/></div >
        <div className='flex flex-col gap-3 flex-grow overflow-y-scroll h-screen no-scrollbar'>
            <ProfileHeader/>
            <ProfilePost />
        </div>
        <Suggest/>
    </div>
  )
}

export default Profile