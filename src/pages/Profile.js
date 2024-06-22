import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ProfilePost from '../components/ProfilePost'
import LeftSection from '../components/LeftSection'
import Suggest from '../components/Suggest'

function Profile() {
  return (
    <div className='p-3 flex gap-3 overflow-hidden h-screen '>
        <div ><LeftSection/></div >
        <div className='flex flex-col gap-3 flex-grow overflow-y-scroll h-screen no-scrollbar'>
            <ProfileHeader/>
            <ProfilePost/>
        </div>
        <Suggest/>
    </div>
  )
}

export default Profile