import React, { useState } from 'react'
import Suggest from '../components/Suggest'
import PostSection from '../components/PostSection'
import LeftSection from '../components/LeftSection'

function LandingPage({setFriend,friend,suggest,setSuggest}) {

  
  return (
    <div className='overflow-hidden'>
      {/* <Navbar/> */}
      <div className=' flex justify-between flex-col p-3  h-screen  md:gap-2  sm:flex sm:flex-row gap-2'>
        <div className='p-1 '><LeftSection friend={friend} setSuggest={setSuggest} suggest={suggest}/></div>
        <PostSection />
        <Suggest setFriend={setFriend} friend={friend} suggest={suggest}/>
      </div>
    </div>
  )
}

export default LandingPage