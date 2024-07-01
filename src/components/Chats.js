import React, { useEffect, useRef } from 'react';
import { baseURL } from '../services/baseURL';

function Chats({ messages, currentUserId, user, receiver }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!messages || messages.length === 0) {
    return <div className='p-3 overflow-y-scroll h-[74vh] custom-scrollbar'>No messages to display.</div>;
  }

  return (
    <div className='p-3 overflow-y-scroll h-[65vh] custom-scrollbar'>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex items-center gap-1 ${message.senderId === currentUserId ? 'justify-end' : 'justify-start'} cursor-pointer py-3 pe-3`}
        >
          {message.senderId !== currentUserId && (
            <div>
              <img src={receiver?.profileImg ? `${baseURL}/uploads/${receiver?.profileImg}` : "./avatar.png"} alt="" className='w-8 h-8 rounded-full' />
            </div>
          )}
          <div className='flex flex-col leading-4'>
            {message.image && (
              <img src={message.image} alt="" className='w-64 rounded mb-2' />
            )}
            <p className={`text-sm py-1 px-3 rounded-xl ${message.senderId === currentUserId ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
              {message.message}
            </p>
          </div>
          {message.senderId === currentUserId && (
            <div>
              <img src={user.profileImg ? `${baseURL}/uploads/${user.profileImg}` : "./avatar.png"} alt="" className='w-8 h-8 rounded-full' />
            </div>
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default Chats;
