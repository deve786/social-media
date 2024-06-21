import React from 'react'
import Navbar from '../components/Navbar'

import Suggest from '../components/Suggest'
import PostSection from '../components/PostSection'
import LeftSection from '../components/LeftSection'

function LandingPage() {
  return (
    <div className=''>
        {/* <Navbar/> */}
        <div className='flex justify-between p-3 gap-2 min-h-screen overflow'>
            <LeftSection/>
            <PostSection/>
            <Suggest/>
        </div>
    </div>
  )
}

export default LandingPage