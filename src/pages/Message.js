import React from 'react'
import MessageList from '../components/MessageList'
import ChatSection from '../components/ChatSection'
import Options from '../components/Options'

function Message() {
  return (
    <div className='flex justify-between p-3 gap-3 h-screen'>
        <Options />
        <MessageList/>
        <ChatSection/>
    </div>
  )
}

export default Message