import React, { useEffect, useState } from 'react';
import Chats from './Chats';
import ChatInput from './ChatInput';
import { getMessagesAPI, getMeAPI } from '../services/allAPI'; 
import { baseURL } from '../services/baseURL';
import io from 'socket.io-client';

const socket = io('http://localhost:8000', { autoConnect: false }); // Replace with your backend server URL

function ChatSection({ selectedUserId }) {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({});
  const [currentUserId, setCurrentUserId] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getMeAPI();
        setUser(data || {});
        setCurrentUserId(data._id); // Assuming the user ID is in the _id field

        // Establish socket connection with userId
        if (data && data._id) {
          socket.io.opts.query = { userId: data._id };
          socket.connect();
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser({});
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        if (selectedUserId && selectedUserId._id) {
          const response = await getMessagesAPI(selectedUserId._id);
          setMessages(response);
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [selectedUserId]);

  useEffect(() => {
    // Listen for new message event from the server
    socket.on('newMessage', (newMessage) => {
      // Update messages state with the new message
      setMessages(prevMessages => [...prevMessages, newMessage]);
      console.log('New message received:', newMessage);
    });

    // Clean up socket listener on component unmount
    return () => {
      socket.off('newMessage');
    };
  }, []);

  const handleNewMessage = (newMessage) => {
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  if (!selectedUserId || !messages) {
    return <div></div>; // Or any placeholder or loading indicator
  }

  return (
    <div className='bg-white rounded-xl justify-between hidden flex-col md:flex md:flex-1'>
      <div className='flex flex-col justify-between'>
        <div className='flex items-center justify-between cursor-pointer py-3 pe-3 ms-1'>
          <div className='flex gap-2 items-center'>
            <div>
              <img src={selectedUserId?.profileImg ? `${baseURL}/uploads/${selectedUserId?.profileImg}` : "./avatar.png"} alt="" className='w-10 h-10 rounded-full' />
            </div>
            <div className='flex flex-col leading-4'>
              <h4 className='text-md'>{selectedUserId?.fullName}</h4>
              <p className='text-xs text-tertiary-color'>{selectedUserId?.username}</p>
            </div>
          </div>
        </div>
        <hr />
        <Chats messages={messages} currentUserId={currentUserId} user={user} receiver={selectedUserId} />
      </div>
      <div className='p-5'>
        <ChatInput receiverId={selectedUserId} onNewMessage={handleNewMessage} />
      </div>
    </div>
  );
}

export default ChatSection;
