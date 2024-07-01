import React, { useState } from 'react'
import MessageList from '../components/MessageList'
import ChatSection from '../components/ChatSection'
import Options from '../components/Options'
import MessageListM from '../components/MessageListM';
import ChatSectionM from '../components/ChatSectionM';

function Message() {
  const [selectedUserId, setSelectedUserId] = useState('');
  const [selectedUserIdM, setSelectedUserIdM] = useState('');
  return (
    <div className='flex justify-between p-3 gap-3 h-screen overflow-hidden '>
      <Options />



      <MessageList onSelectUser={setSelectedUserId} />



      <ChatSection selectedUserId={selectedUserId} />


    </div>
  )
}

export default Message