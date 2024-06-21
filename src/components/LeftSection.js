import React from 'react'
import Options from './Options'
import FriendsList from './FriendsList'

function LeftSection() {
  return (
    <div className='left-section flex flex-col w-full gap-10 bg-white sm:min-h-[96vh] rounded-xl h-fit '>
        <div><Options/></div>
        <hr className='hidden md:block'/>
        <FriendsList/>
    </div>
  )
}

export default LeftSection