import React from 'react'
import Options from './Options'
import FriendsList from './FriendsList'

function LeftSection() {
  return (
    <div className='left-section flex flex-col gap-10 bg-white min-h-[96vh] rounded-xl '>
        <Options/>
        <hr/>
        <FriendsList/>
    </div>
  )
}

export default LeftSection