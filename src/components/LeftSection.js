import React from 'react'
import Options from './Options'
import FriendsList from './FriendsList'

function LeftSection() {
  return (
    <div className='left-section flex flex-col gap-10 bg-white h-screen rounded-xl overflow-hidden'>
        <Options/>
        <hr className='w-full'/>
        <FriendsList/>
    </div>
  )
}

export default LeftSection