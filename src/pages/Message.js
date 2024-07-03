import React, { useState } from 'react'
import MessageList from '../components/MessageList'
import ChatSection from '../components/ChatSection'
import Options from '../components/Options'

function Message() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setIsChatVisible(true);
  };

  const handleBack = () => {
    setIsChatVisible(false);
  };

  return (
    <div className='flex md:justify-between  p-3 gap-3 h-screen overflow-hidden'>
      <Options />
      <MessageList onSelectUser={handleSelectUser} isChatVisible={isChatVisible} />
      {selectedUser && (
        <div className=' flex-1 md:flex-1 flex md:h-screen h-[90vh] '>
          <ChatSection selectedUserId={selectedUser} isChatVisible={isChatVisible} onBack={handleBack} /></div>
      )}
    </div>
  )
}

export default Message
