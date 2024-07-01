import React, { useEffect, useState } from 'react';
import { getMeAPI, getMessageUsersAPI } from '../services/allAPI';
import { baseURL } from '../services/baseURL';

function MessageList({ onSelectUser, isChatVisible }) {
  const [users, setUsers] = useState([]);
  const [me, setMe] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getMessageUsersAPI();
        setUsers(response);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getMeAPI();
        setMe(data || {});
      } catch (error) {
        console.error("Error fetching user data:", error);
        setMe({});
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className={`bg-white p-1 rounded-xl overflow-y-scroll h-[97vh] no-scrollbar flex-1 ${isChatVisible ? 'hidden md:block' : 'block'}`}>
      <h3 className='mb-3 font-semibold'>{me.fullName}</h3>
      <div>
        {users.map((user, index) => (
          <div
            key={index}
            className='flex justify-between cursor-pointer py-3 pe-3 gap-10 hover:bg-hover-bg md:pe-16'
            onClick={() => onSelectUser(user)}  // Call onSelectUser with user id
          >
            <div className='flex items-center gap-2'>
              <div>
                <img src={user.profileImg ? `${baseURL}/uploads/${user?.profileImg}` : "./avatar.png"} alt="" className='w-10 h-10 rounded-full' />
              </div>
              <div className='flex flex-col leading-3'>
                <h4 className='text-md'>{user.fullName}</h4>
                <p className='text-xs text-tertiary-color'>{user.content}</p>
              </div>
            </div>
            <div>
              <p>
                <i className="fa-solid fa-circle text-[7px] text-primary-color"></i>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageList;
