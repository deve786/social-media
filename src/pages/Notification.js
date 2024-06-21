import React from 'react'
import Options from '../components/Options'
import Notifications from '../components/Notifications'

function Notification() {
  return (
    <div className='flex p-3 gap-3 h-screen'>
        <Options/>
        <Notifications/>
    </div>
  )
}

export default Notification